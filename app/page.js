"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "sonner";
import {
  CheckCircle,
  PlusCircle,
  MinusCircle,
  Trash2,
  Info,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Masala Dosa",
    price: 2.5,
    priceDisplay: "$2.50",
    category: "Food",
    description: "Crispy dosa filled with spicy mashed potatoes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG05O5NcCE_kSlfxvXQm7tppLU1n4xF3ryyA&s",
    inStock: true,
  },
  {
    id: 2,
    name: "Pav Bhaji",
    price: 2.0,
    priceDisplay: "$2.00",
    category: "Food",
    description: "Spicy mashed vegetables served with buttered bread.",
    image: "https://source.unsplash.com/400x300/?pavbhaji",
    inStock: false,
  },
  {
    id: 3,
    name: "Chole Bhature",
    price: 3.0,
    priceDisplay: "$3.00",
    category: "Food",
    description: "Fried bread with chickpea curry.",
    image: "https://source.unsplash.com/400x300/?cholebhature",
    inStock: true,
  },
  {
    id: 4,
    name: "Lassi",
    price: 1.2,
    priceDisplay: "$1.20",
    category: "Drinks",
    description: "Refreshing yogurt-based drink, sweet or salty.",
    image: "https://source.unsplash.com/400x300/?lassi",
    inStock: true,
  },
  // New unique items
  {
    id: 9,
    name: "Paneer Tikka",
    price: 4.0,
    priceDisplay: "$4.00",
    category: "Food",
    description: "Grilled paneer cubes marinated in spices and yogurt.",
    image: "https://source.unsplash.com/400x300/?paneer,tikka",
    inStock: true,
  },
  {
    id: 10,
    name: "Butter Chicken",
    price: 5.5,
    priceDisplay: "$5.50",
    category: "Food",
    description: "Tender chicken cooked in creamy tomato gravy.",
    image: "https://source.unsplash.com/400x300/?butter,chicken",
    inStock: true,
  },
  {
    id: 11,
    name: "Masala Chai",
    price: 1.0,
    priceDisplay: "$1.00",
    category: "Drinks",
    description: "Traditional Indian spiced tea made with milk and tea leaves.",
    image: "https://source.unsplash.com/400x300/?masalachai",
    inStock: true,
  },
  {
    id: 12,
    name: "Gulab Jamun",
    price: 2.0,
    priceDisplay: "$2.00",
    category: "Dessert",
    description: "Soft deep-fried dough balls soaked in rose-flavored sugar syrup.",
    image: "https://source.unsplash.com/400x300/?gulabjamun",
    inStock: true,
  },
  {
    id: 13,
    name: "Aloo Paratha",
    price: 2.5,
    priceDisplay: "$2.50",
    category: "Food",
    description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
    image: "https://source.unsplash.com/400x300/?alooparatha",
    inStock: true,
  },
];


export default function MenuPage() {
  const categories = ["All", "Food", "Drinks"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [myItems, setMyItems] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // raw input
  const [searchTerm, setSearchTerm] = useState("");   // debounced value

  const [sortAsc, setSortAsc] = useState(true);

  // Filter items by category & search
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

    // Sort by price
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
  }, 300); // 300ms debounce

  return () => clearTimeout(handler); // cancel previous timer
}, [searchInput]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5 }}
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

      <h1 className="text-4xl font-semibold mb-8 text-center tracking-tight">
        Today's Menu
      </h1>

      {/* Filters + Search + Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 max-w-7xl mx-auto">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start flex-grow">
          {categories.concat("My Items").map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition duration-200 border whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat === "My Items"
                ? `My Items (${myItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )})`
                : cat}
            </motion.button>
          ))}
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search items..."
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-30 w-full sm:w-64"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            aria-label="Search menu items"
          />
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-xl text-sm bg-white hover:bg-gray-100 transition shadow-sm flex items-center justify-center gap-1"
            aria-label="Toggle sort order"
          >
            Sort by Price: {sortAsc ? "Low" : "High"}
            {sortAsc ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Items Grid */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={selectedCategory + searchTerm + sortAsc}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
        >
          {(selectedCategory === "My Items" ? myItems : filteredItems).map(
            (item) => (
              <motion.div
                key={item.id}
                layout
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer"
              >
                {!item.inStock && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 select-none">
                    Out of Stock
                  </span>
                )}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG05O5NcCE_kSlfxvXQm7tppLU1n4xF3ryyA&s"
                  alt={item.name}
                  className="w-full h-44 object-cover rounded-t-3xl"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <p
                    className={`text-lg font-semibold mb-4 ${
                      item.inStock ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {item.priceDisplay}
                  </p>
                  {item.inStock && selectedCategory !== "My Items" && (
                    <motion.button
                      onClick={() => addItem(item)}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm tracking-wide hover:bg-gray-800 transition"
                    >
                      Add to My Items
                    </motion.button>
                  )}
                  {selectedCategory === "My Items" && (
                    <div className="mt-4 flex justify-between items-center">
                      <motion.button
                        onClick={() => removeItem(item)}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                        aria-label={`Remove one ${item.name}`}
                      >
                        −
                      </motion.button>
                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <motion.button
                        onClick={() => addItem(item)}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-1 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
                        aria-label={`Add one ${item.name}`}
                      >
                        +
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
