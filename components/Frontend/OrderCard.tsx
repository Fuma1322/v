import { Order } from "@/types/types";
import {
  MapPin,
  Phone,
  ShoppingBag,
  User,
} from "lucide-react";
import OrderStatusBadge from "./OrderStatusBadge";
;


interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="rounded-2xl border border-[#25D366] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Customer
          </p>

          <h2 className="text-xl font-bold text-[#111111]">
            {order.customerName}
          </h2>
        </div>

        <OrderStatusBadge status={order.status} />
      </div>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-[#25D366]" />

          <span className="text-[#111111]">
            {order.location}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-[#25D366]" />

          <span className="text-[#111111]">
            {order.phoneNumber}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#25D366]/10 p-4">

          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#25D366]" />

            <span className="font-medium text-[#111111]">
              Potato Bags
            </span>
          </div>

          <div className="rounded-lg bg-[#25D366] px-4 py-2 font-bold text-white">
            {order.bags}
          </div>

        </div>

      </div>
    </div>
  );
}