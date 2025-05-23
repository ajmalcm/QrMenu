"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import {
  CheckCircle,
  PlusCircle,
  MinusCircle,
  Trash2,
} from "lucide-react";
import Header from "@/components/Header";
import Items from "@/components/Items";
import SearchSort from "@/components/SearchSort";
import { MENU } from "@/utils/sampleData";

const menuItems = MENU.map((item, index) => {
  return {
    id: index + 1,
    name: item.item,
    price: item.price[0],
    priceDisplay: `₹${item.price[0]}`,
    category: item.category,
    inStock: item.inStock,
    description: `Available sizes: ${item.price.map((p) => `₹${p}`).join(", ")}`,
  };
});

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [myItems, setMyItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  // const [inStockOnly, setInStockOnly] = useState(false);

  const filteredItems = useMemo(() => {
    let items =
      selectedCategory === "All"
        ? menuItems
        : selectedCategory === "My Items"
        ? myItems
        : menuItems.filter((item) => item.category === selectedCategory);

    if (selectedCategory === "My Items") {
      items = myItems;
    }

    if (searchTerm.trim()) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // if (inStockOnly) {
    //   items = items.filter((item) => item.inStock);
    // }

    items = items.slice().sort((a, b) =>
      sortAsc ? a.price - b.price : b.price - a.price
    );

    return items;
  }, [selectedCategory, myItems, searchTerm, sortAsc]);

  const addItem = (item) => {
    setMyItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        toast(
          <div className="flex items-center gap-2 md:gap-5">
            <PlusCircle className="w-5 h-5 text-green-600 animate-pulse" />
            <span>Added one more {item.name}</span>
          </div>
        );
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        toast(
          <div className="flex items-center gap-2 md:gap-5">
            <CheckCircle className="w-5 h-5 text-green-600 animate-pulse" />
            <span>{item.name} added to My Items</span>
          </div>
        );
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (item) => {
    setMyItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (!existing) return prev;

      if (existing.quantity > 1) {
        toast(
          <div className="flex items-center gap-2 md:gap-5">
            <MinusCircle className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span>Removed one {item.name}</span>
          </div>,
          { duration: 2000 }
        );
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        toast(
          <div className="flex items-center gap-2 md:gap-5">
            <Trash2 className="w-5 h-5 text-red-600 animate-pulse" />
            <span>{item.name} removed from My Items</span>
          </div>,
          { duration: 2000 }
        );
        return prev.filter((i) => i.id !== item.id);
      }
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(searchInput.trim());
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInput]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-white p-4 sm:p-10 font-sans text-gray-900"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          className:
            "bg-white text-gray-900 border border-gray-300 shadow-lg rounded-xl px-4 py-3",
          style: { fontSize: "0.95rem" },
          duration: 2500,
        }}
      />

      <Header />

      <SearchSort
        myItems={myItems}
        setSearchInput={setSearchInput}
        setSelectedCategory={setSelectedCategory}
        setSortAsc={setSortAsc}
        sortAsc={sortAsc}
        selectedCategory={selectedCategory}
        searchInput={searchInput}
        menuItems={menuItems}
        // inStockOnly={inStockOnly}
        // setInStockOnly={setInStockOnly}
      />

      <Items
        selectedCategory={selectedCategory}
        addItem={addItem}
        removeItem={removeItem}
        filteredItems={filteredItems}
        myItems={myItems}
      />
    </motion.div>
  );
}
