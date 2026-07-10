"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

import { deleteOrder } from "@/actions/orders";
import { Order } from "@/types/types";

import {
  MapPin,
  Phone,
  PhoneCall,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import OrderStatusBadge from "./OrderStatusBadge";
import OrderStatusActions from "./OrderStatusActions";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import EditOrderModal from "./EditOrderModal";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    try {
      setIsDeleting(true);

      const response = await deleteOrder(order.id);

      if (response.status !== 200) {
        toast.error(response.error ?? "Failed to delete order");
        return;
      }

      toast.success("Order deleted successfully");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">Customer</p>

          <h2 className="text-xl font-bold text-[#111111]">
            {order.customerName}
          </h2>
        </div>

        <OrderStatusBadge status={order.status} />
      </div>

      {/* Body */}
      <div className="space-y-4">
        {/* Location */}
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-[#25D366]" />

          <span className="text-[#111111]">{order.location}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#25D366]" />

            <span className="text-[#111111]">
              {order.phoneNumber}
            </span>
          </div>

          <a
            href={`tel:${order.phoneNumber}`}
            className="flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
          >
            <PhoneCall className="h-4 w-4" />

            Call
          </a>
        </div>

        {/* Bags */}
        <div className="flex items-center justify-between rounded-xl bg-[#25D366]/10 p-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#25D366]" />

            <span className="font-medium text-[#111111]">
              Potato Bags
            </span>
          </div>

          <span className="rounded-lg bg-[#25D366] px-4 py-2 font-bold text-white">
            {order.bags}
          </span>
        </div>

        {/* Status Actions */}
        <OrderStatusActions
          id={order.id}
          status={order.status}
        />

        {/* Delete */}
        <div className="
                flex
                justify-between
                pt-2
                ">
                  <EditOrderModal
                  order={order}
                />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="flex items-center bg-white gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
                <Trash2 className="h-4 w-4" />

                Delete
              </button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Delete this order?
                </AlertDialogTitle>

                <AlertDialogDescription>
                  This action cannot be undone. The order for{" "}
                  <strong>{order.customerName}</strong> will be
                  permanently removed.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete Order"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}