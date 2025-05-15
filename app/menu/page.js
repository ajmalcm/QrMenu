
"use client"
import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Masala Dosa",
    price: "$2.50",
    category: "Food",
    description: "Crispy dosa filled with spicy mashed potatoes.",
    image: "https://source.unsplash.com/400x300/?dosa",
    inStock: true
  },
  {
    id: 2,
    name: "Pav Bhaji",
    price: "$2.00",
    category: "Food",
    description: "Spicy mashed vegetables served with buttered bread.",
    image: "https://source.unsplash.com/400x300/?pavbhaji",
    inStock: false
  },
  {
    id: 3,
    name: "Chole Bhature",
    price: "$3.00",
    category: "Food",
    description: "Fried bread with chickpea curry.",
    image: "https://source.unsplash.com/400x300/?cholebhature",
    inStock: true
  },
  {
    id: 4,
    name: "Lassi",
    price: "$1.20",
    category: "Drinks",
    description: "Refreshing yogurt-based drink, sweet or salty.",
    image: "https://source.unsplash.com/400x300/?lassi",
    inStock: true
  },
];

export default function MenuPage() {
  const categories = ["All", "Food", "Drinks"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [myItems, setMyItems] = useState([]);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const addItem = (item) => {
    setMyItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (item) => {
    setMyItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing.quantity > 1) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prev.filter((i) => i.id !== item.id);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-emerald-600">
        Today's Menu
      </h1>

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? "bg-emerald-600 text-white"
                : "bg-white text-emerald-600 border border-emerald-600"
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory("My Items")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
            selectedCategory === "My Items"
              ? "bg-emerald-600 text-white"
              : "bg-white text-emerald-600 border border-emerald-600"
          }`}
        >
          My Items ({myItems.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(selectedCategory === "My Items" ? myItems : filteredItems).map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            {!item.inStock && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
                Out of Stock
              </span>
            )}
            <img
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV__-3abmbiyCo3JjXlzLESUd_jmvbgQ62Rw&s"}
              alt={item.name}
              className="w-full h-40 object-cover opacity-100"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {item.description}
              </p>
              <p className={`font-bold text-lg ${item.inStock ? "text-emerald-600" : "text-gray-400"}`}>
                {item.price}
              </p>
              {item.inStock && selectedCategory !== "My Items" && (
                <button
                  onClick={() => addItem(item)}
                  className="mt-3 w-full px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white"
                >
                  Add to My Items
                </button>
              )}
              {selectedCategory === "My Items" && (
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => removeItem(item)}
                    className="px-3 py-1 bg-red-500 text-white rounded-full"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => addItem(item)}
                    className="px-3 py-1 bg-emerald-600 text-white rounded-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
