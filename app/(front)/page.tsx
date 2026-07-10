import OrderGrid from "@/components/Frontend/OrderGrid";
import { getOrders } from "@/actions/orders";

export default async function Home() {

  const response = await getOrders();
  const orders = response.data ?? [];
  
  return (
    <section className="space-y-6 pt-12">
      <OrderGrid orders={orders} />
    </section>
  );
}