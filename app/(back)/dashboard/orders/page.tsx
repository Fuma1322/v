import { getDeliveredOrders } from "@/actions/orders";
import OrderGrid from "@/components/Frontend/OrderGrid";


export default async function OrdersPage() {

  const response = await getDeliveredOrders();
  const orders = response.data ?? [];

  return (

    <section className="space-y-6 p-6">
       {/* HEADER */}

      <div>

        <h1 className="text-3xl font-bold text-[#111111]">
          Orders
        </h1>

        <p className="text-gray-500">
          Manage customer potato orders
        </p>

      </div>

      <OrderGrid
        orders={orders}
      />

    </section>

  );

}