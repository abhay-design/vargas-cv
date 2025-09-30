const baseUrl = process.env.WORDPRESS_URL;
import { category } from "./types";

export async function getCategories(): Promise<category[]> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
  const data = await response.json();
  return data;
}
