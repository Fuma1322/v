import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-3">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-10 border-t py-10">

          <div className="space-y-5 text-center">

            <h2 className="text-3xl font-extrabold">
              <Link href="/">
                <span className="text-[#25D366]">MPLUG</span> PTY LTD
              </Link>
              <div className="pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MPLUG PTY LTD. All Rights Reserved.
              </div>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-7 text-[#111111]">
              Powered by MPLUG PTY LTD — In the business of making people happy 
              through beautiful and interactive software solutions.
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}