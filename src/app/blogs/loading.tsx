import LoadingCard from "@/components/ui/LoadingCard";
import { IBlog } from "@/type";

const BlogsLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs: IBlog[] = await res.json();
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 my-5">
        {blogs?.map((blog: IBlog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogsLoadingPage;
