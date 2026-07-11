import { Order } from "@/types/types";
import OrderDashCard from "./OrderCard";


interface Props {
  orders: Order[];
}

export default function OrderDashGrid({
  orders,
}: Props) {

  if (!orders.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[#25D366] bg-white p-12 text-center">

        <h2 className="text-xl font-semibold text-[#111111]">
          No Orders Yet
        </h2>

        <p className="mt-2 text-gray-500">
          Orders will appear here once customers start placing them.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {orders.map((order) => (
        <OrderDashCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}