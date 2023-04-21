import React from "react";
import { useParams } from "react-router-dom";
import API from "../../src/Utility/axios";
import draftToHtml from "draftjs-to-html";
const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState({});
  React.useEffect(() => {
    API.get(`/blogs/${id}`).then((res) => {
      setBlog(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  const [html, setHtml] = React.useState("");
  React.useEffect(() => {
    if (blog.body) setHtml(draftToHtml(blog.body));
  }, [blog]);

  return (
    <div className="py-10">
      Blog
      <div className="max-h-[90vh] p-2 overflow-y-scroll text-white">
        <div>{blog?.title}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
          style={{
            color: "white!important",
          }}
          className="opacity-80 text-white white text-justify backdrop-blur-md my-10"
        ></div>
      </div>
    </div>
  );
};

export default SingleBlog;
