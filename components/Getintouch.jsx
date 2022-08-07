import React from "react";

const Getintouch = () => {
  return (
    // Project Section
    <div className="w-full h-full text-center px-12 mt-20">
      {/* Background  */}
      <div className="max-w-[896px] w-full h-full mx-auto justify-center items-center pl-2">
        {/* Header  */}
        <div className="flex flex-col py-8 pb-32 items-center text-center">
          <p className="pb-4">What's Next?</p>
          <h1 className="font-bold">
            Get in Touch<span>.</span>
          </h1>
          <p className="py-8 max-w-2xl">
            I am always interested in new projects and opportunities or
            discussing my past work! The best way to contact me is by email, or
            shoot me a message on Linkedin!
          </p>
          <button className="p-4 w-32 pb-"> Say Hi !</button>
        </div>
        {/* Content  */}
        <div></div>
      </div>
    </div>
  );
};

export default Getintouch;
