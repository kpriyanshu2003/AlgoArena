import CreatePostForm from "@/components/posts/CreatePostForm";
import ecllipse3 from "@/app/images/asset/ecllipse3.svg";
import ecllipse2 from "@/app/images/asset/Ellipse2.svg";
import ecllipse1 from "@/app/images/asset/ellipse1.svg";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";

const CreatePost = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative">
        <div className="absolute md:h-[75rem] md:w-[75rem] sm:h-[67rem] sm:w-[47rem] lg:top-[-180px] md:top-0 sm:top-[-20px] 2xl:left-[-80px] lg:left-[-250px] left-[-270px] overflow-hidden lg:rotate-[0deg] md:rotate-[10deg] sm:rotate-[-20deg] rotate-0 lg:block h-[60rem] w-[40rem]">
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="absolute lg:w-[55rem] md:w-[51rem] sm:w-[46rem] w-[40rem] lg:h-[90rem] md:h-[71rem] sm:h-[50rem] h-[49rem] md:left-[0rem] top-[0px] overflow-hidden opacity-60 block  "
          />
        </div>
        <div className="absolute h-[50rem] sm:h-[89rem] w-[68.0625rem] md:top-[80px] top:[60px] 2xl:left-[-140px] left-[-250px] overflow-hidden md:rotate-[-10deg] rotate-[-6deg] z-1 lg:block ">
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="absolute md:w-[69.0625rem] w-[60rem] md:h-[50.5rem] sm:h-[45rem] h-[38rem] sm:left-[-12rem] left-[-16rem]  md:top-[-10px] top-[35px] overflow-hidden opacity-50"
          />
        </div>
        <div className="absolute h-[77rem] w-[51.5rem] sm:top-[150px] top-[40px] left-[-250px] overflow-hidden rotate-[-5deg] z-1 lg:block">
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="absolute md:w-[66rem] sm:w-[50rem] w-[30rem] md:h-[40rem] sm:h-[35rem] h-[40rem] sm:left-[-12rem] left-[-4rem] top-[0px] overflow-hidden opacity-50"
          />
        </div>
      </div>
      <div className=" relative flex pt-18 flex-col  lg:px-0 ">
        <CreatePostForm />
      </div>
    </div>
  );
};

export default CreatePost;
