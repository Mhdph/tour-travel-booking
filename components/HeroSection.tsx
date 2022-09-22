import Image from "next/image";
import Link from "next/link";
import React from "react";
import herophoto from "../assets/Rectangle 3.png";
function HeroSection() {
  return (
    <div className=" flex justify-around items-center my-6">
      <div className="flex-1 mr-24 ">
        <Image
          alt="herosection"
          height={"538px"}
          width={"374px"}
          src={herophoto}
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="font-bold  text-5xl leading-snug w-full">
          زندگی‌ای را بکن که <br />
          همیشه آرزوی آن را داشته ای
        </p>
        <p className="font-normal text-2xl my-6">
          زندگی کوتاه است و دنیا بسیار بزرگ بنابراین <br /> همین الان شروع کن!
        </p>
        <button className="text-white p-4 w-52 bg-primary rounded-lg">
          <Link href="signup">مشاهده محبوب ترین تورها </Link>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
