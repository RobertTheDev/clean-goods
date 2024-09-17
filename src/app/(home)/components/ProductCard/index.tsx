import Image from "next/image";
import { formatPrice } from "../../../utils/formatPrice";
import Link from "next/link";
import { ShopifyProduct } from "../../../types";

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const prodId = product.id.split("/").pop();

  return (
    <Link href={`/products/${prodId}`}>
      <li>
        <div className="aspect-square relative w-full">
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            fill
            objectFit="cover"
            placeholder="blur"
            blurDataURL={product.featuredImage.url}
          />
        </div>

        <div className="p-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-yellow-400 font-bold py-1 px-3 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}

          <h3 className="font-medium mt-3 text-3xl">{product.title}</h3>

          <h4>
            {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{" "}
            {product.priceRangeV2.minVariantPrice.currencyCode}
          </h4>

          <p className="mt-2 mb-4">{product.description}</p>
        </div>
      </li>
    </Link>
  );
}
