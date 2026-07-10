"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Pencil } from "lucide-react";

import { updateOrder } from "@/actions/orders";
import { Order } from "@/types/types";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


interface Props {
  order: Order;
}


type FormData = {
  customerName: string;
  phoneNumber: string;
  location: string;
  bags: string;
  status:
    | "PENDING"
    | "CONFIRMED"
    | "DELIVERED"
    | "CANCELLED";
};


export default function EditOrderModal({
  order,
}: Props) {

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);



  const {
    register,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      customerName: order.customerName,
      phoneNumber: order.phoneNumber,
      location: order.location,
      bags: String(order.bags),
      status: order.status,
    },
  });

  async function onSubmit(data: FormData) {

    try {
      setLoading(true);
      const response = await updateOrder(
        order.id,
        {
            customerName:data.customerName,
            phoneNumber:data.phoneNumber,
            location:data.location,
            bags:Number(data.bags),
            status:data.status,
        }
        );
      if(response.status !== 200){

        toast.error(
          response.error ?? "Failed to update order"
        );

        return;
      }

      toast.success(
        "Order updated successfully"
      );

      setOpen(false);

      router.refresh();
    } catch(error){

      console.error(error);

      toast.error(
        "Something went wrong"
      );
    } finally {

      setLoading(false);
    }

  }

  return (

    <AlertDialog
      open={open}
      onOpenChange={setOpen}
    >


      <AlertDialogTrigger asChild>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-[#25D366]/30
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-[#111111]
          transition
          hover:bg-[#25D366]/10
          "
        >

          <Pencil
            className="
            h-4
            w-4
            text-[#25D366]
            "
          />

          Edit

        </button>


      </AlertDialogTrigger>





      <AlertDialogContent
        className="
        max-w-lg
        border
        border-[#25D366]/30
        rounded-2xl
        bg-white
        p-6
        shadow-2xl
        "
      >


        <AlertDialogHeader>


          <AlertDialogTitle>

            Edit Order

          </AlertDialogTitle>



          <AlertDialogDescription>

            Update customer details and delivery information.

          </AlertDialogDescription>


        </AlertDialogHeader>





        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
          mt-4
          space-y-4
          "
        >


          <div>

            <label className="text-sm font-medium text-[#111111]">
              Customer Name
            </label>

            <input
              {...register("customerName")}
              className="
              mt-1
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#25D366]
              "
            />

          </div>




          <div>

            <label className="text-sm font-medium text-[#111111]">
              Phone Number
            </label>

            <input
              {...register("phoneNumber")}
              className="
              mt-1
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#25D366]
              "
            />

          </div>




          <div>

            <label className="text-sm font-medium text-[#111111]">
              Location
            </label>

            <input
              {...register("location")}
              className="
              mt-1
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#25D366]
              "
            />

          </div>




          <div>

            <label className="text-sm font-medium text-[#111111]">
              Potato Bags
            </label>


            <input
              type="number"
              {...register("bags")}
              className="
              mt-1
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#25D366]
              "
            />

          </div>




          <div>

            <label className="text-sm font-medium text-[#111111]">
              Status
            </label>


            <select
              {...register("status")}
              className="
              mt-1
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#25D366]
              "
            >

              <option value="PENDING">
                Pending
              </option>


              <option value="CONFIRMED">
                Confirmed
              </option>


              <option value="DELIVERED">
                Delivered
              </option>


              <option value="CANCELLED">
                Cancelled
              </option>


            </select>


          </div>





          <AlertDialogFooter>


            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>

            <button
                type="submit"
                disabled={loading}
                className="
                h-11
                rounded-xl
                bg-[#25D366]
                px-6
                font-semibold
                text-white
                transition
                hover:bg-[#20bd5a]
                disabled:opacity-50
                "
                >
                {
                loading
                ? "Updating..."
                : "Save Changes"
                }
                </button>

          </AlertDialogFooter>



        </form>


      </AlertDialogContent>


    </AlertDialog>

  );
}