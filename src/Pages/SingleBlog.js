import React from "react";
import { useParams } from "react-router-dom";
import API from "../../src/Utility/axios";
import draftToHtml from "draftjs-to-html";
const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState({});
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  // if (!hydrated) {
  //   // Returns null on first render, so the client and server match
  //   return null;
  // }
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

  const [markup, setMarkup] = React.useState("");

  React.useEffect(() => {
    if (blog?.body) {
      setMarkup(draftToHtml(blog.body));
    }
  }, [blog]);

  const createMarkup = () => {
    const modifiedHtml = markup.replace(
      /(<img.*?>|<figure.*?>|<\/figure>|<h\d>.*?<\/h\d>)/g,
      (match) => {
        // Check if the match is a heading element
        if (match.startsWith("<h")) {
          return `<div class="my-16"><span class="text-3xl max-md:text-xl text-center font-bold text-white">${match}</span></div>`;
        }
        return `<div class="my-4 flex justify-center">${match}</div>`;
      }
    );

    const modifiedWithFont = modifiedHtml.replace(
      /<p.*?>(.*?)<\/p>/g,
      (match, pContent) =>
        `<p class="font-[share-tech] text-justify">${pContent}</p>`
    );

    return { __html: modifiedWithFont };
  };

  return (
    <div className="py-10">
      Blog
      <div className="max-h-[90vh] p-2 overflow-y-scroll text-white">
        <div>{blog?.title}</div>
        <div
          id="single-blog"
          dangerouslySetInnerHTML={createMarkup(hydrated || "")}
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
