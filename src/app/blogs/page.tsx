import BlogCard from "@/components/ui/BlogCard";
import { IBlog } from "@/type";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs: IBlog[] = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h1 className="text-center text-4xl mt-8 font-semibold">
          All Blogs From <span className="text-accent">Blogiz</span>
        </h1>
        <p className="text-center text-xl w-2/4 mx-auto mt-5">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 my-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
