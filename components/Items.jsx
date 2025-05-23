import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Items = ({selectedCategory,addItem,removeItem,filteredItems,myItems}) => {
  return (
       <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={selectedCategory}
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
                transition={{ type: "spring", stiffness: 110, damping: 20 }}
                className="relative bg-gray-100 rounded-3xl shadow-md overflow-hidden cursor-pointer"
              >
                {!item.inStock && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 select-none">
                    Out of Stock
                  </span>
                )}
                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG05O5NcCE_kSlfxvXQm7tppLU1n4xF3ryyA&s"
                  alt={item.name}
                  className="w-full h-44 object-cover rounded-t-3xl"
                /> */}
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
  )
}

export default Items