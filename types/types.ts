export interface Order {
  id: string;

  customerName: string;

  phoneNumber: string;

  location: string;

  bags: number;

  notes?: string | null;

  status:
    | "PENDING"
    | "CONFIRMED"
    | "DELIVERED"
    | "CANCELLED";

  createdAt: Date;
}