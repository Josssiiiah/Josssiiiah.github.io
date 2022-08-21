import React from "react";

const Getintouch = () => {
  return (
    // GetInTouch Section
    <div id="contact" className="w-full h-full text-center px-12 my-60">
      {/* Background  */}
      <div className="max-w-[896px] w-full h-full mx-auto justify-center items-center pl-2">
        {/* Header  */}
        <div className="flex flex-col py-8 pb-32 items-center text-center">
          <h4 className="pb-4">What's Next?</h4>
          <h1 className="font-bold">
            Get in Touch<span>.</span>
          </h1>
          {/* Content  */}
          <h4 className="py-8 max-w-2xl">
            I am always interested in new projects and opportunities or
            discussing my past work! The best way to contact me is by email, or
            shoot me a message on Linkedin!
          </h4>
          <button className="p-4 w-32"> Say Hi !</button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Getintouch;
