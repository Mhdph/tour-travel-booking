import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();

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
      name: "جاذبه های گردشگری ایران",
      path: "/touriran",
    },
    {
      name: "جاذبه های گردشگری آلمان",
      path: "/tourgermany",
    },
    {
      name: "آخرین اخبار",
      path: "/news",
    },
  ];

  return (
    <div
      className="flex font-semibold sticky z-50 bg-[#f6f7fe] top-0 text-base w-full justify-around items-center mt-2 h-20 shadow-3xl
"
    >
      <button className="text-white px-4 py-2 bg-primary rounded-lg">
        <Link href="signup">ورود/ثبت نام</Link>
      </button>
      <div className="flex justify-between  items-center  gap-8">
        {navbar.map((item) => (
          <Link href={item.path} key={item.name}>
            <a
              className={
                router.pathname === item.path ? "text-landing-50" : "text-black"
              }
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
      <p>Logo</p>
    </div>
  );
}

export default Header;
