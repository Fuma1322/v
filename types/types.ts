export interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  location: string;
  bags: number;
  notes?: string;
  status: "Pending" | "Delivered";
  createdAt: Date;
}

