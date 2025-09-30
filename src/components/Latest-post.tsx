import React from "react";
import Link from "next/link";
import { Post, LatestPostsProps } from "@/lib/types";

export async function Latestpost({
  title,
  posts,
  currentPage = 1,
  totalPages = 1,
  searchTerm,
  categories,
}: LatestPostsProps) {
  if (posts?.length === 0) {
    return <div>no posts available</div>;
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {title ? (
          <h2 className="text-xl mb-4">{title}</h2>
        ) : searchTerm ? (
          <h2 className="text-xl mb-4">search results</h2>
        ) : (
          <h2 className="text-xl mb-4">Latest Posts</h2>
        )}

        <div>search bar</div>
      </div>

      <div className="flex flex-col mb-4">
        {posts?.map((post: Post) => (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className="border-b py-4 flex justify-between gap-4 hover:bg-slate-50"
            scroll={true}
          >
            <div
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></div>
            <p>{new Date(post.date).toLocaleDateString("de-DE")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
