// export const menuItems = [
//   {
//     id: 1,
//     name: "Masala Dosa",
//     price: 2.5,
//     priceDisplay: "$2.50",
//     category: "Food",
//     description: "Crispy dosa filled with spicy mashed potatoes.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG05O5NcCE_kSlfxvXQm7tppLU1n4xF3ryyA&s",
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Pav Bhaji",
//     price: 2.0,
//     priceDisplay: "$2.00",
//     category: "Food",
//     description: "Spicy mashed vegetables served with buttered bread.",
//     image: "https://source.unsplash.com/400x300/?pavbhaji",
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: "Chole Bhature",
//     price: 3.0,
//     priceDisplay: "$3.00",
//     category: "Food",
//     description: "Fried bread with chickpea curry.",
//     image: "https://source.unsplash.com/400x300/?cholebhature",
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Lassi",
//     price: 1.2,
//     priceDisplay: "$1.20",
//     category: "Drinks",
//     description: "Refreshing yogurt-based drink, sweet or salty.",
//     image: "https://source.unsplash.com/400x300/?lassi",
//     inStock: true,
//   },
//   // New unique items
//   {
//     id: 9,
//     name: "Paneer Tikka",
//     price: 4.0,
//     priceDisplay: "$4.00",
//     category: "Food",
//     description: "Grilled paneer cubes marinated in spices and yogurt.",
//     image: "https://source.unsplash.com/400x300/?paneer,tikka",
//     inStock: true,
//   },
//   {
//     id: 10,
//     name: "Butter Chicken",
//     price: 5.5,
//     priceDisplay: "$5.50",
//     category: "Food",
//     description: "Tender chicken cooked in creamy tomato gravy.",
//     image: "https://source.unsplash.com/400x300/?butter,chicken",
//     inStock: true,
//   },
//   {
//     id: 11,
//     name: "Masala Chai",
//     price: 1.0,
//     priceDisplay: "$1.00",
//     category: "Drinks",
//     description: "Traditional Indian spiced tea made with milk and tea leaves.",
//     image: "https://source.unsplash.com/400x300/?masalachai",
//     inStock: true,
//   },
//   {
//     id: 12,
//     name: "Gulab Jamun",
//     price: 2.0,
//     priceDisplay: "$2.00",
//     category: "Dessert",
//     description: "Soft deep-fried dough balls soaked in rose-flavored sugar syrup.",
//     image: "https://source.unsplash.com/400x300/?gulabjamun",
//     inStock: true,
//   },
//   {
//     id: 13,
//     name: "Aloo Paratha",
//     price: 2.5,
//     priceDisplay: "$2.50",
//     category: "Food",
//     description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
//     image: "https://source.unsplash.com/400x300/?alooparatha",
//     inStock: true,
//   },
// ];

export const MENU = [
  {
    item: "Al Faham",
    price: [100, 190, 300],
    category: "Arabian Special",
    inStock: false,
  },
  {
    item: "Grill Chicken",
    price: [80, 160, 300],
    category: "Arabian Special",
    inStock: false,
  },
  {
    item: "Chicken Mandi",
    price: [150, 300, 600],
    category: "Arabian Special",
    inStock: false,
  },
  {
    item: "Al Faham Mandi",
    price: [150, 300, 600],
    category: "Arabian Special",
    inStock: true,
  },
  {
    item: "Mandi Rice",
    price: [60, 90, 160, 300],
    category: "Arabian Special",
    inStock: true,
  },

  {
    item: "Thalassery Chicken Biryani",
    price: [80, 120],
    category: "Biryani",
    inStock: true,
  },
  {
    item: "Hyderabadi Chicken Dum Biryani",
    price: [100, 150],
    category: "Biryani",
    inStock: true,
  },
  { 
    item: "Egg Biryani", 
    price: [80], category: "Biryani", 
    inStock: true 
  },
  { 
    item: "Biryani Rice", 
    price: [50, 70], 
    category: "Biryani", 
    inStock: true },
  { 
    item: "Ghee Rice", 
    price: [50, 70], 
    category: "Biryani", 
    inStock: true 
  },
  { 
    item: "Plain White Rice", 
    price: [40], 
    category: "Biryani", 
    inStock: true 
  },
  {
    item: "Erachi Choru Chicken",
    price: [100],
    category: "Biryani",
    inStock: true,
  },
  { 
    item: "Chicken Kabsa", 
    price: [140], 
    category: "Biryani", 
    inStock: true 
  },
  {
    item: "Mutton Biryani", 
    price: [220], 
    category: "Biryani", 
    inStock: true 
  },

  {
    item: "Chicken Fried Rice",
    price: [80, 100],
    category: "Fried Rice",
    inStock: true,
  },
  {
    item: "Egg Fried Rice",
    price: [70, 90],
    category: "Fried Rice",
    inStock: true,
  },
  {
    item: "Veg Fried Rice",
    price: [50, 70],
    category: "Fried Rice",
    inStock: true,
  },
  {
    item: "Mushroom Fried Rice",
    price: [60, 80],
    category: "Fried Rice",
    inStock: true,
  },
  {
    item: "Paneer Fried Rice",
    price: [60, 80],
    category: "Fried Rice",
    inStock: true,
  },

  {
    item: "Chicken Noodles",
    price: [70, 90],
    category: "Noodles",
    inStock: true,
  },
  { 
    item: "Egg Noodles",
    price: [70, 90],
    category: "Noodles", 
    inStock: true },
  { 
    item: "Veg Noodles", 
    price: [60, 70], 
    category: "Noodles", 
    inStock: true },
  {
    item: "Mushroom Noodles",
    price: [60, 80],
    category: "Noodles",
    inStock: true,
  },

  { item: "Egg Bhurji", price: [50], category: "Egg Items", inStock: true },
  { item: "Egg Keema", price: [60], category: "Egg Items", inStock: true },
  { item: "Egg Roast", price: [55], category: "Egg Items", inStock: true },
  { item: "Egg Curry", price: [50], category: "Egg Items", inStock: true },

  { item: "Parotta", price: [15], category: "Breakfast", inStock: true },
  { item: "Chappathi", price: [15], category: "Breakfast", inStock: true },
  { item: "Nice Pathiri", price: [20], category: "Breakfast", inStock: true },

  {
    item: "Butter Chicken",
    price: [140],
    category: "KFK SPL Chicken Curry",
    inStock: true,
  },
  {
    item: "Chicken Tikka Masala",
    price: [140],
    category: "KFK SPL Chicken Curry",
    inStock: true,
  },

  { 
    item: "Fish Biryani", 
    price: [120], 
    category: "Fish Items", 
    inStock: true 
  },
  {
    item: "Fish Curry Slice",
    price: [100],
    category: "Fish Items",
    inStock: true,
  },
];
