export async function shopifyFetch({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, any>;
}) {
  const shopifyGraphQLApiUrl = process.env.SHOPIFY_GRAPHQL_API_URL!;
  const shopifyAccessToken = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN!;

  const result = await fetch(shopifyGraphQLApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": shopifyAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!result.ok) {
    const text = await result.text();
    throw new Error(`
          Failed to fetch data
          Status: ${result.status}
          Response: ${text}
        `);
  }

  return result.json();
}
