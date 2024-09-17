import { GraphQLResponse, ShopifyProduct } from "@/app/types";
import { gql } from "@/app/utils/gql";
import { shopifyFetch } from "@/app/utils/shopifyFetch";

export async function getProduct(
  id: string
): Promise<GraphQLResponse<{ product: ShopifyProduct }>> {
  return shopifyFetch({
    variables: {
      id: `gid://shopify/Product/${id}`,
    },
    query: gql`
      query SingleProductQuery($id: ID!) {
        product(id: $id) {
          description
          featuredImage {
            altText
            height
            id
            url
            width
          }
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
    `,
  });
}
