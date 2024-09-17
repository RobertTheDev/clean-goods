import { getProducts } from "./data";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const json = await getProducts();

  return (
    <main className="container mx-auto">
      <div className="px-5">
        <h2 className="font-bold text-2xl mb-3">Our Products:</h2>
        <ul className="grid grid-cols-4 gap-4 pb-12">
          {json.data.products.nodes.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </ul>
      </div>
    </main>
  );
}
