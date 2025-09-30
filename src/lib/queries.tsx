const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
import { category, Post } from "./types";
const revelidateTime: number = 30;

export async function getCategories(): Promise<category[]> {
  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_WORDPRESS_URL");
  }

  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
  const data = await response.json();
  return data;
}

export async function getAllposts(
  pageNumber: number = 1,
  perPage = 10,
  searchTerm: string = "",
  categories: number = 0
): Promise<{ posts: Post[]; totalPages: number }> {
  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: pageNumber.toString(),
    search: searchTerm,
    _embed: "true", // Add this to include featured media
    timestamp: Date.now().toString(), // Cache buster
  });

  if (categories !== 0) {
    params.set("categories", categories.toString());
  }

  // console.log(`${baseUrl}/wp-json/wp/v2/posts?${params}`);
  const response = await fetch(
    `${baseUrl}/wp-json/wp/v2/posts?${params.toString()}`,
    {
      next: {
        revalidate: revelidateTime,
        // Or use tags for on-demand revalidation
        tags: ["posts-collection"],
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const posts = await response.json();
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") ?? "1");
  return { posts, totalPages };
}
