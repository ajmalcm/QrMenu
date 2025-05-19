import React from 'react'
import { motion } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const SearchSort = ({sortAsc,searchInput,setSearchInput,setSortAsc,myItems,setSelectedCategory,selectedCategory}) => {

  const categories = ["All", "Food", "Drinks"];

  return (
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
  )
}

export default SearchSort