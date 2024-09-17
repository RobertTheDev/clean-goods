import { GraphQLResponse, ShopifyProduct } from "../types";
import { gql } from "../utils/gql";
import { shopifyFetch } from "../utils/shopifyFetch";

export async function getProducts(): Promise<
  GraphQLResponse<{
    products: {
      nodes: ShopifyProduct[];
    };
  }>
> {
  return shopifyFetch({
    query: gql`
      query ProductsQuery {
        products(first: 6) {
          nodes {
            description
            featuredImage {
              altText
              height
              id
              url
              width
            }
            handle
            id
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            tags
            title
          }
        }
      }
    `,
  });
}
