import { z } from "zod";


export const OrderSchema = z.object({

customerName:
z.string()
.min(2,"Customer name required"),


phoneNumber:
z.string()
.min(8,"Phone number required"),


location:
z.string()
.min(2,"Location required"),


bags:
z.coerce.number()
.min(1,"At least one bag required"),


status:
z.enum([
"PENDING",
"CONFIRMED",
"DELIVERED",
"CANCELLED"
])
.optional()

});