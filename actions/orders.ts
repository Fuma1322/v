"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { verifyAdmin } from "@/lib/admin";
import { OrderSchema } from "./zod";


export async function createOrder(data:any){

  try {

    await verifyAdmin();


    const parsed = OrderSchema.safeParse(data);


    if(!parsed.success){

      return {
        data:null,
        status:400,
        error:parsed.error.flatten()
      };

    }


    const order = await prisma.order.create({

      data:{
        customerName: parsed.data.customerName,

        phoneNumber: parsed.data.phoneNumber,

        location: parsed.data.location,

        bags:Number(parsed.data.bags),

        status:parsed.data.status ?? "PENDING",
      }

    });


    revalidatePath("/dashboard/orders");
    revalidatePath("/");


    return {
      data:order,
      status:201,
      error:null
    };


  } catch(error){

    console.error(error);


    return {
      data:null,
      status:500,
      error:"Order not created"
    };

  }

}

export async function getOrders(){

try{

 const orders = await prisma.order.findMany({

  orderBy:{
    createdAt:"desc"
  }

 });


 return {
  data:orders,
  status:200,
  error:null
 };


}catch(error){

 return {
  data:null,
  status:500,
  error:"Failed to fetch orders"
 };

}

}

export async function getOrderById(id:string){

try{

const order = await prisma.order.findUnique({
 where:{
  id
 }
});


return {
 data:order,
 status:200,
 error:null
};


}catch(error){

return {
 data:null,
 status:500,
 error:"Order not found"
};

}

}

export async function updateOrder(
  id: string,
  data: {
    customerName?: string;
    phoneNumber?: string;
    location?: string;
    bags?: number;
    status?:
      | "PENDING"
      | "CONFIRMED"
      | "DELIVERED"
      | "CANCELLED";
  }
) {
  try {

    await verifyAdmin();


    const existingOrder = await prisma.order.findUnique({
      where:{
        id,
      },
    });


    if(!existingOrder){

      return {
        data:null,
        status:404,
        error:"Order not found"
      };

    }



    const updatedOrder = await prisma.order.update({

      where:{
        id,
      },


      data:{
        customerName:data.customerName,
        phoneNumber:data.phoneNumber,
        location:data.location,
        bags:data.bags,
        status:data.status,
      }

    });



    revalidatePath("/dashboard/orders");
    revalidatePath("/");



    return {

      data:updatedOrder,
      status:200,
      error:null

    };



  } catch(error){

    console.error(
      "UPDATE ORDER ERROR:",
      error
    );


    return {

      data:null,
      status:500,
      error:"Order not updated"

    };

  }
}

export async function deleteOrder(id:string){

try{


await prisma.order.delete({

where:{
 id
}

});


revalidatePath("/dashboard/orders");


return {
 ok:true,
 status:200,
 error:null
};


}catch(error){

return {
 ok:false,
 status:500,
 error:"Order not deleted"
};

}

}