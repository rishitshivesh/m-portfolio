import React from "react";
import Lottie from "lottie-web";
import animationData from "../Assets/Lottie/mobLoading.json";
import night from "../Assets/Theme/night.svg";
import { Page } from "konsta/react";
import Nav from "../Components/Navbar/Navbar";
const Loader = () => {
  const lottieRef = React.useRef(null);
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        speed: 0.5,
      },
    });
    return () => {
      Lottie.destroy();
    };
  }, []);

  return (
    <Page className="h-[100vh] overflow-hidden">
      <Nav />
      <div
        className="w-full h-[100vh] flex justify-center place-items-center"
        style={{
          background: `url(${night})`,
        }}
        ref={lottieRef}
      >
        {/* <div className="absolute top-0 left-0 z-10"> */}
        {/* </div> */}
      </div>
    </Page>
  );
};

export default Loader;
