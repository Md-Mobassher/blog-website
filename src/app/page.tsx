import LatestBlogs from "@/components/latestBlog/LatestBlogs";
import { IBlog } from "@/type";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: IBlog[] = await res.json();

  return (
    <>
      <div>
        <h1 className="text-center text-4xl mt-8 font-semibold">
          Latest Blogs From <span className="text-accent">Blogiz</span>
        </h1>
        <p className="text-center text-xl w-2/4 mx-auto mt-5">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div>
        <LatestBlogs blogs={blogs} />
      </div>
    </>
  );
};

export default HomePage;
