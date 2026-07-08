import { CheckCircle2, Clock3, PackageCheck, XCircle } from "lucide-react";

interface OrderStatusBadgeProps {
  status: "PENDING" | "CONFIRMED" | "DELIVERED" | "CANCELLED";
}

export default function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {
  switch (status) {
    case "PENDING":
      return (
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
          <Clock3 className="h-4 w-4" />
          Pending
        </div>
      );

    case "CONFIRMED":
      return (
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          <PackageCheck className="h-4 w-4" />
          Confirmed
        </div>
      );

    case "DELIVERED":
      return (
        <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-3 py-1 text-sm font-medium text-[#25D366]">
          <CheckCircle2 className="h-4 w-4" />
          Delivered
        </div>
      );

    default:
      return (
        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
          <XCircle className="h-4 w-4" />
          Cancelled
        </div>
      );
  }
}