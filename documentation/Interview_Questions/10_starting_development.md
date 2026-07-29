1. What is the role of main.jsx in a React application?

main.jsx is the entry point of the React application. It creates the React root and renders the main application component into the DOM.

2. What are props in React?

Props are read-only data passed from a parent component to a child component.

<ProductCard product={product} />
function ProductCard({ product }) {}

3. Why do we use reusable components?

To improve:

Reusability
Maintainability
Scalability
Code organization
Avoid duplicate code

4. Why do we use .map() in React?

To iterate over an array and dynamically render a component for every item.

products.map((product) => (
  <ProductCard product={product} />
))
5. Why is key required when rendering lists?
<ProductCard key={product.id} />

It helps React uniquely identify each list item and efficiently update the UI when items change.

6. Why should we use a stable unique ID instead of an array index as a key?

Because IDs remain associated with the same item even when the list is reordered, added to, or modified. Array indexes can change and cause rendering issues.

7. What is component composition?

Building a larger UI by combining smaller components.

App
 ├── Navbar
 └── Home
     └── ProductGrid
         └── ProductCard
8. Why do we separate ProductGrid and ProductCard?

Because each component has a clear responsibility:

ProductGrid → manages multiple products
ProductCard → displays one product

This is separation of concerns.

9. What is the difference between ProductGrid and ProductCard?

ProductGrid handles the collection of products, while ProductCard handles the UI of an individual product.

10. How does product data flow through our application?
Home
  ↓ props
ProductGrid
  ↓ props
ProductCard
  ↓
Product UI
11. Why do we use an array to store products?

Because an array allows us to store and manage multiple product objects:

const products = [
  { id: 1, name: "Headphones" },
  { id: 2, name: "Smart Watch" }
];
12. What is the future image flow in ShopSphere AI?
Admin uploads image
        ↓
Cloudinary
        ↓
Image URL
        ↓
MongoDB
        ↓
Backend API
        ↓
React ProductCard