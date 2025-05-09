import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "./../../types/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaBlog | Blogs",
};

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogData = await res.json();
  console.log(blogData);

  return (
    <div className="max-w-[1340px] m-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogData?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
