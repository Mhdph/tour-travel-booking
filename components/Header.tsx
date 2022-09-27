import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const router = useRouter();
  const [show, setshow] = useState(false);

  const navbar = [
    {
      name: "خانه",
      path: "/",
    },
    {
      name: "تورها",
      path: "/tours",
    },
    {
      name: "هتل ها",
      path: "/hotels",
    },
    {
      name: "بلیط های داخلی",
      path: "/ticket",
    },

    {
      name: "جاذبه های گردشگری ",
      path: "/tourism",
    },

    {
      name: "آخرین اخبار",
      path: "/news",
    },
  ];

  return (
    <div>
      <nav
        className="flex font-semibold sticky z-40 bg-[#f6f7fe] top-0 text-base w-full justify-between lg:justify-around items-center mt-2 h-20 lg:shadow-3xl
      "
      >
        <button className="text-white hidden xl:flex px-4 py-2 bg-primary rounded-lg">
          <Link href="signup">ورود/ثبت نام</Link>
        </button>
        <div className="lg:hidden cursor-pointer">
          {show ? (
            <XMarkIcon
              onClick={() => setshow(false)}
              className="inline xl:hidden w-6 h-6 mr-4"
            />
          ) : (
            <Bars3Icon
              onClick={() => setshow(true)}
              className="inline xl:hidden w-6 h-6 mr-4"
            />
          )}
        </div>

        <div
          className={`${
            show
              ? "flex flex-col relative left-20 bg-[#f6f7fe]  md:left-44 p-2 text-right top-52 w-1/2 z-50 transition-all ease-out"
              : "hidden"
          }  lg:flex justify-between md:file:items-center  gap-8`}
        >
          {navbar.map((item) => (
            <Link href={item.path} key={item.name}>
              <a
                className={
                  router.pathname === item.path
                    ? "text-landing-50"
                    : "text-black"
                }
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <p className="ml-4 lg:ml-0">Logo</p>
      </nav>
    </div>
  );
}

export default Header;
