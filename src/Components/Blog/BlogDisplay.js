import React from "react";
import { Moment } from "react-moment";
import { Link } from "react-router-dom";

const BlogDisplay = ({ data }) => {
  return (
    <div className="bg-[#ffffff30] backdrop-blur-md w-full rounded-xl p-4 flex flex-col">
      <div className="font-bold">{data?.title}</div>
      <Link to={"/blog/" + data?.id} className="flex">
        {data?.raw.substring(0, 200) + "..."} Read More
      </Link>
      <div className="flex flex-row justify-between mt-4">
        <div>
          {/* <Moment fromNow>{data?.date}</Moment> */}
          {data?.date}
        </div>
        <div>Share</div>
      </div>
    </div>
  );
};

export default BlogDisplay;
