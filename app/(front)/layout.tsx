import Footer from "@/components/Frontend/Footer";
import MobileDock from "@/components/Frontend/MobileDock";
import Navbar from "@/components/Frontend/Navbar";
import React, { ReactNode } from "react";

export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col pb-14 md:pb-0">

      <Navbar />

      <main className="flex-1 p-6">
        {children}
      </main>

      <Footer />

      <MobileDock />

    </div>
  );
}