"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { createOrder } from "@/actions/orders";

import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";


export type OrderProps = {
  customerName: string;
  phoneNumber: string;
  location: string;
  bags: number;
  status:
    | "PENDING"
    | "CONFIRMED"
    | "DELIVERED"
    | "CANCELLED";
};


export default function OrderForm({
  title,
}: {
  title: string;
}) {

  const router = useRouter();

  const [isLoading,setIsLoading] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors
    }

  } = useForm<OrderProps>({
    defaultValues:{
      status:"PENDING"
    }
  });

  async function onSubmit(data:OrderProps){

    try{

      setIsLoading(true);

      const response = await createOrder(data);

      if(response.status !== 201){

        toast.error(
          "Please fix the form errors"
        );

        return;

      }

      toast.success(
        "Order created successfully"
      );


      reset();

      router.push(
        "/dashboard/orders"
      );

      router.refresh();


    }catch(error){

      console.error(error);

      toast.error(
        "Something went wrong"
      );


    }finally{

      setIsLoading(false);

    }

  }

  return (

    <div
      className="
      mx-auto
      w-full
      max-w-4xl
      rounded-2xl
      border
      border-gray-100
      bg-white
      shadow-sm
      "
    >


      {/* Header */}

      <div
        className="
        border-b
        px-6
        py-5
        "
      >

        <h1
          className="
          text-2xl
          font-extrabold
          text-[#111111]
          "
        >

          {title}

        </h1>


        <p
          className="
          mt-1
          text-sm
          text-gray-500
          "
        >

          Capture customer orders quickly

        </p>


      </div>



      {/* FORM */}

      <form

        onSubmit={
          handleSubmit(onSubmit)
        }

        className="
        space-y-8
        px-6
        py-6
        "

      >



        {/* Customer Details */}

        <div>

          <h2
            className="
            mb-4
            text-lg
            font-bold
            text-[#111111]
            "
          >
            Customer Information
          </h2>


          <div
            className="
            grid
            gap-6
            md:grid-cols-2
            "
          >


            <TextInput

              label="Customer Name"

              name="customerName"

              register={register}

              errors={errors}

              placeholder="e.g John Mokoena"

              isRequired

            />



            <TextInput

              label="Phone Number"

              name="phoneNumber"

              register={register}

              errors={errors}

              placeholder="+266 5800 0000"

              isRequired

            />



          </div>


        </div>




        {/* Delivery Details */}


        <div>


          <h2
            className="
            mb-4
            text-lg
            font-bold
            text-[#111111]
            "
          >
            Order Details
          </h2>



          <div
            className="
            grid
            gap-6
            md:grid-cols-2
            "
          >



            <TextInput

              label="Delivery Location"

              name="location"

              register={register}

              errors={errors}

              placeholder="e.g Maseru West"

              isRequired

            />




            <TextInput

              label="Number of Potato Bags"

              name="bags"

              register={register}

              errors={errors}

              placeholder="e.g 10"

              isRequired

            />


          </div>


        </div>




        {/* STATUS */}


        <div>

          <label
            className="
            mb-2
            block
            text-sm
            font-medium
            text-[#111111]
            "
          >

            Order Status

          </label>


          <select

            {...register("status")}

            className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-[#111111]
            outline-none
            transition
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




        {/* ACTION */}


        <div
          className="
          flex
          justify-end
          pt-4
          "
        >

          <SubmitButton

            title="Create Order"

            isLoading={isLoading}

            LoadingTitle="Creating Order..."

          />


        </div>



      </form>



    </div>

  );
}