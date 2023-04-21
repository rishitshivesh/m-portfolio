import React from "react";
import API from "../../src/Utility/axios";
import BlogDisplay from "../Components/Blog/BlogDisplay";
const Blog = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    API.get("/blogs").then((res) => {
      setBlogs(res.data.data);
    });
  }, []);
  console.log(blogs);
  // )
  return (
    <div className="py-10">
      Blog
      <div className="max-h-[90vh] overflow-y-scroll p-2 flex flex-col gap-y-4">
        {blogs &&
          blogs.map((blog) => {
            return <BlogDisplay data={blog} key={blog.id} />;
          })}
      </div>
    </div>
  );
};

export default Blog;
