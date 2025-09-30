import Hero from "@/components/Hero";
import Socialicons from "@/components/Social-icons";
import { Categories } from "@/components/Categories";
import { getCategories } from "@/lib/queries";

export default async function Home() {
  const categories = await getCategories();
  return (
    <div>
      <Hero />
      <Socialicons />
      <Categories categories={categories} />
    </div>
  );
}
