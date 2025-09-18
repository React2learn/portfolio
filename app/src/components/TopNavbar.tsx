"use client";

import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import { ArrowLeft } from "lucide-react";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="mt-4 left-0 right-0 flex items-center justify-between px-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className=""
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );
}
