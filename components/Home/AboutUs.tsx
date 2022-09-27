import Image from "next/image";
import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row gap-28 lg:gap-52 justify-center">
      <div className="mr-2">
        <p className="text-landing-50 mt-12 font-bold mr-4 sm:mr-0 text-2xl">
          درباره ما
        </p>
        <p className="text-3xl text-center md:text-right lg:text-5xl font-bold my-16">
          برنامه سفر ما با هدف برآوردن <br />
          هر آرزوی شماست.
        </p>
        <p className="lg:text-xl text-base text-center md:text-right tracking-wider">
          پذیرفتن این نکته که هر چیزی ارزشمند باشد <br /> شامل خودباوری، چشم
          انداز، سخت کوشی، تعهد و فداکاری است
        </p>
        <div className="flex mx-4 sm:mx-0  text-landing-50 text-3xl font-bold gap-6 lg:gap-16 justify-center mt-16">
          <div className="flex items-center flex-col gap-6">
            <p>4.3</p>
            <p className="text-gray-800 text-base">امتیاز ما</p>
          </div>
          <div className="flex items-center flex-col gap-6">
            <p>5</p>
            <p className="text-gray-800 text-base">هزار سفر موفق </p>
          </div>
          <div className="flex items-center flex-col gap-6">
            <p>10</p>
            <p className="text-gray-800 text-base">هزار همسفر </p>
          </div>

          <div className="flex items-center flex-col gap-6">
            <p>20</p>
            <p className="text-gray-800 text-base"> سال تجربه</p>
          </div>
        </div>
      </div>
      <div className="hidden sm:inline">
        <Image width={340} height={620} alt="aboutus" src={about1} />
        <div className="relative bottom-96 -mb-80 left-32">
          <Image width={280} height={430} alt="aboutus" src={about2} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
