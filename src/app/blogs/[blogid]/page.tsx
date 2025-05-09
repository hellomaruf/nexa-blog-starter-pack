import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  return data.slice(0, 3).map((blog: Blog) => ({
    blogid: blog.id,
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) => {
  const { blogid } = await params;
  console.log(blogid);
  const res = await fetch(`http://localhost:5000/blogs/${blogid}`);
  const blog = await res.json();

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
