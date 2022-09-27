import Image from "next/image";
import React from "react";
import tour1 from "../../assets/testimnial1.png";
import tour2 from "../../assets/testimnial2.png";
import tour3 from "../../assets/testimnial3.png";
import tour4 from "../../assets/testimnial4.png";
import person from "../../assets/person.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import { StarIcon } from "@heroicons/react/24/solid";

function Testimonials() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center sm:mx-4 lg:mx-0">
      <div className="bg-white shadow-xl h-full w-[245px] flex-col items-center flex rounded-[32px]">
        <Image src={tour1} alt="tourimage" />
        <div className="relative bottom-20 -mb-28">
          <Image src={person} alt="person" />
        </div>
        <p className="text-3xl text-center font-bold mt-10">حدیث</p>
        <p className="text-center text-xs my-4 px-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <div className="flex justify-center items-center pb-3">
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
        </div>
      </div>
      <div className="bg-white shadow-xl h-full w-[245px] flex-col items-center flex rounded-[32px]">
        <Image src={tour2} alt="tourimage" />
        <div className="relative bottom-20 -mb-28">
          <Image src={person2} alt="person" />
        </div>
        <p className="text-3xl text-center font-bold mt-10">مهسا</p>
        <p className="text-center text-xs my-4 px-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <div className="flex justify-center items-center pb-3">
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
        </div>
      </div>
      <div className="hidden lg:flex bg-white shadow-xl h-full w-[245px] flex-col items-center rounded-[32px]">
        <Image src={tour3} alt="tourimage" />
        <div className="relative bottom-20 -mb-28">
          <Image src={person3} alt="person" />
        </div>
        <p className="text-3xl text-center font-bold mt-10">نیلوفر</p>
        <p className="text-center text-xs my-4 px-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <div className="flex justify-center items-center pb-3">
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
        </div>
      </div>
      <div className="bg-white shadow-xl h-full w-[245px] flex-col items-center flex rounded-[32px]">
        <Image src={tour4} alt="tourimage" />

        <div className="relative bottom-20 -mb-28">
          <Image src={person4} alt="person" />
        </div>
        <p className="text-3xl text-center font-bold mt-10">نرگس</p>
        <p className="text-center text-xs my-4 px-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <div className="flex justify-center items-center pb-3">
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
          <StarIcon className="text-yellow-500 w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
