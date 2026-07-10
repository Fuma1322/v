"use client";

import { updateOrder } from "@/actions/orders";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Check, PackageCheck, X } from "lucide-react";


interface Props {
  id: string;
  status:
    | "PENDING"
    | "CONFIRMED"
    | "DELIVERED"
    | "CANCELLED";
}


export default function OrderStatusActions({
  id,
  status,
}: Props) {


  const [loading,setLoading] = useState(false);



  async function changeStatus(
    newStatus:
    "PENDING"
    | "CONFIRMED"
    | "DELIVERED"
    | "CANCELLED"
  ){

    try{

      setLoading(true);


      const response = await updateOrder(
        id,
        {
          status:newStatus
        }
      );


      if(response.status !== 200){

        toast.error(
          "Unable to update order"
        );

        return;
      }
      toast.success(
        "Order updated"
      );

    }catch{

      toast.error(
        "Something went wrong"
      );


    }finally{

      setLoading(false);

    }

  }

  return (
    <div className="mt-6 flex justify-end gap-3 border-t border-gray-100 pt-4">
    {
      status === "PENDING" && (
        <button
          disabled={loading}
          onClick={() =>
            changeStatus("CONFIRMED")
          }
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-[#25D366]
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-[#20bd5a]
          disabled:opacity-50
          "
        >
          <PackageCheck className="h-4 w-4"/>

          Confirm
        </button>
      )
    }


    {
      status === "CONFIRMED" && (
        <button
          disabled={loading}
          onClick={() =>
            changeStatus("DELIVERED")
          }
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-[#25D366]
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-[#20bd5a]
          disabled:opacity-50
          "
        >
          <Check className="h-4 w-4"/>

          Delivered
        </button>
      )
    }


    {
      status !== "DELIVERED" &&
      status !== "CANCELLED" && (
        <button
          disabled={loading}
          onClick={() =>
            changeStatus("CANCELLED")
          }
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-red-200
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-red-600
          transition
          hover:bg-red-50
          disabled:opacity-50
          "
        >
          <X className="h-4 w-4"/>

          Cancel
        </button>
      )
    }
  </div>

  );
}