import BlogDetails from "@/components/ui/BlogDetails";
import { IBlog, IParams } from "@/type";

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: IBlog) => ({
    blogId: blog.id,
  }));
};
const BlogDetailsPage = async ({ params }: { params: IParams }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
