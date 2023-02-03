import React, { useState } from "react";
import Drag from "../Components/Toggle/Toggle";
const Drags = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-center place-items-center">
      <Drag toggle={toggle} set={setToggle} />
    </div>
  );
};

export default Drags;
