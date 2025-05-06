import { isBlog, isOfType } from "@/types/checker";
import { Blog } from "@/types/components/career";
import Link from "next/link";
import React from "react";

// BlogList component takes in a list of blogs and renders each one as a BlogCard
interface BlogListProps {
  blogList: Blog[];
}

const BlogList = ({ blogList }: BlogListProps) => {
  // Check if blogList is an array
  if (!Array.isArray(blogList)) return null; // Return null if blogList is not a valid array

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8 mt-20 md:mt-24 px-3 lg:px-6  container-c">
      {blogList.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </section>
  );
};

// BlogCard component renders individual blog details
interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  // Validate blog data using the custom type guard
  const isValidBlog = isOfType<Blog>(blog, isBlog);
  if (!isValidBlog) return null; // Return null if blog data is invalid

  return (
    <div className="p-2">
      <h3 className="text-lg md:text-xl font-semibold text-inherit">
        {blog.card_title}
      </h3>
      <p className="mt-4 text-start text-xs lg:text-sm text-inherit font-normal">
        {blog.card_description}
      </p>
      <Link
        href={blog.learn_more_link}
        className="underline block mt-3 md:mt-5 hover:transition-colors hover:text-blue-500 text-blue-600 visited:text-blue-700"
      >
        Learn more
      </Link>
    </div>
  );
};

export default BlogList;
