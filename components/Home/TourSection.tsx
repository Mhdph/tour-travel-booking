import Image from "next/image";
import Link from "next/link";
import React from "react";
import tour1 from "../../assets/tour1.png";
import tour2 from "../../assets/tour2.png";
import tour3 from "../../assets/tour3.png";
import tour4 from "../../assets/tour4.png";

function TourSection() {
  return (
    <div>
      <p className="text-black font-bold text-xl sm:text-4xl text-center">
        اگر به اندازه کافی دوام بیاوریم، <br /> ما می توانیم به هر چیزی برسیم
      </p>
      <p className="text-gray-700 font-normal p-2 sm:p-0 text-lg my-4 text-center">
        در جایی که هستید از آنچه دارید بهترین استفاده را ببرید.
      </p>
      <div className="flex items-center sm:hidden justify-center p-4 h-12 w-52  border border-landing-50 mb-4 rounded-lg text-black mr-4">
        <Link href="signup">مشاهده تمامی تورها </Link>
      </div>
      <div className=" flex justify-center lg:gap-60">
        <div className="bg-white rounded-lg p-4">
          <Image width={230} height={170} src={tour1} alt=" tourimage" />
          <p className="text-right font-bold text-black text-xl my-2">مکان</p>
          <div className="flex justify-between">
            <p className="text-[#A8A8A8]">تور ۳ روز</p>
            <p className="text-landing-50 text-2xl">$450</p>
          </div>
          <button className="text-white p-4 h-12 w-full mt-4  bg-primary rounded-lg">
            <Link href="signup"> رزرو تور </Link>
          </button>
        </div>
        <button className="hidden sm:inline text-white p-4 h-12 w-52 mt-8 bg-primary rounded-lg">
          <Link href="signup">مشاهده محبوب ترین تورها </Link>
        </button>
        <div className="bg-white rounded-lg p-4">
          <Image
            width={230}
            height={170}
            src={tour4}
            className="rounded-lg"
            alt=" tourimage"
          />
          <p className="text-right font-bold text-black text-xl my-2">
            لب ساحل
          </p>
          <div className="flex justify-between">
            <p className="text-[#A8A8A8]">تور ۱۰ روز</p>
            <p className="text-landing-50 text-2xl">$450</p>
          </div>
          <button className="text-white p-4 h-12 w-full mt-4  bg-primary rounded-lg">
            <Link href="signup"> رزرو تور </Link>
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row justify-center gap-2 lg:relative bottom-56 -mb-32">
        <div className="bg-white rounded-lg p-4">
          <Image
            width={270}
            height={220}
            src={tour2}
            className="rounded-lg"
            alt=" tourimage"
          />
          <p className="text-right font-bold text-black text-xl my-2">
            کنار دریا
          </p>
          <div className="flex justify-between">
            <p className="text-[#A8A8A8]">تور ۷ روز</p>
            <p className="text-landing-50 text-2xl">$450</p>
          </div>
          <button className="text-white p-4 h-12 w-full mt-4  bg-primary rounded-lg">
            <Link href="signup"> رزرو تور </Link>
          </button>
        </div>
        <div className="bg-white rounded-lg p-4">
          <Image
            width={270}
            height={220}
            src={tour3}
            className="rounded-lg"
            alt=" tourimage"
          />
          <p className="text-right font-bold text-black text-xl my-2">
            رودخانه
          </p>
          <div className="flex justify-between">
            <p className="text-[#A8A8A8]">تور ۱۲ روز</p>
            <p className="text-landing-50 text-2xl">$450</p>
          </div>
          <button className="text-white p-4 h-12 w-full mt-4  bg-primary rounded-lg">
            <Link href="signup"> رزرو تور </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourSection;
