"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

function TodayDate() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const formatted = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    setDateStr(formatted);
  }, []);

  if (!dateStr) return null;

  return (
    <span className="text-sm text-gray-500 hidden sm:inline">
      {dateStr}
    </span>
  );
}

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-20  border-b  py-3 px-4 sm:px-10 mb-6  flex items-center justify-between border-gray-200 bg-white/75 backdrop-blur-md shadow-sm"
    >
      <span className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1">
        NAHDI MANDI
      </span>
      <h1 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
        <Utensils className="w-5 h-5" />
        Today's Menu
      </h1>
      <TodayDate />
    </motion.header>
  );
};

export default Header;
