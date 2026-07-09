import OrderGrid from "@/components/Frontend/OrderGrid";
import { Order } from "@/types/types";


const orders: Order[] = [
  {
    id: "1",
    customerName: "Tankiso Fuma",
    phoneNumber: "+26658001234",
    location: "Maseru West",
    bags: 12,
    notes: "",
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    id: "2",
    customerName: "John Mokoena",
    phoneNumber: "+26663000000",
    location: "Roma",
    bags: 8,
    notes: "",
    status: "DELIVERED",
    createdAt: new Date(),
  },
];

export default function Home() {
  return (
    <section className="space-y-6 pt-12">
      <OrderGrid orders={orders} />
    </section>
  );
}