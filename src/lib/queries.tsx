const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
import { category } from "./types";

export async function getCategories(): Promise<category[]> {
  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_WORDPRESS_URL");
  }

  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
  const data = await response.json();
  return data;
}
