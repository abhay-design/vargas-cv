import Hero from "@/components/Hero";
import Socialicons from "@/components/Social-icons";
import { Categories } from "@/components/Categories";
import { getCategories, getAllposts } from "@/lib/queries";
import { Latestpost } from "@/components/Latest-post";

export default async function Home() {
  const { posts } = await getAllposts();
  const categories = await getCategories();

  return (
    <div>
      <Hero />
      <Socialicons />
      <Categories categories={categories} />
      <Latestpost posts={posts} />
    </div>
  );
}
