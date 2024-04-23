import BlogDetails from "@/components/ui/BlogDetails";
import { IParams } from "@/type";

const BlogDetailsPage = async ({ params }: { params: IParams }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
