import { Order } from "@/types/types";

import {
  MapPin,
  Phone,
  PhoneCall,
  ShoppingBag,
} from "lucide-react";

import OrderStatusBadge from "./OrderStatusBadge";
import OrderStatusActions from "./OrderStatusActions";

interface Props{
  order:Order;
}

export default function OrderCard({
  order
}:Props){


return (

  <div
  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">

    <div className=" mb-5 flex items-start justify-between">

    <div>
    <p className="text-sm text-gray-500">
    Customer
    </p>


    <h2
    className="
    text-xl
    font-extrabold
    text-[#111111]
    "
    >
    {order.customerName}
    </h2>


    </div>


    <OrderStatusBadge
    status={order.status}
    />


    </div>




  <div
  className="
  space-y-4
  "
  >


  {/* LOCATION */}

  <div
  className="
  flex
  items-center
  gap-3
  "
  >

  <MapPin
  className="
  h-5
  w-5
  text-[#25D366]
  "
  />

  <p className="text-[#111111]">
  {order.location}
  </p>


  </div>

  {/* PHONE */}

  <div
  className="
  flex
  items-center
  justify-between
  "
  >


  <div
  className="
  flex
  items-center
  gap-3
  "
  >

  <Phone
  className="
  h-5
  w-5
  text-[#25D366]
  "
  />

  <p>
  {order.phoneNumber}
  </p>

  </div>

  <a
  href={`tel:${order.phoneNumber}`}
  className="flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white">

  <PhoneCall className="h-4 w-4"/>

  Call

  </a>
  </div>

  {/* BAGS */}

  <div className="flex items-center justify-between rounded-xl bg-[#25D366]/10 p-4">

  <div className="flex items-center gap-2">

  <ShoppingBag className="h-5 w-5 text-[#25D366]" />

  <span className="font-medium">
  Potato Bags
  </span>

  </div>

  <span
  className="rounded-lg bg-[#25D366] px-4 py-2 font-bold text-white">

  {order.bags}

  </span>
  </div>

  <OrderStatusActions id={order.id} status={order.status} />

  </div>
  </div>

);

}