"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "@/app/_styles/header.scss";
import Nav from "./nav";
import Logo from "@/public/Siyzo-Logo.svg";

const Header = () => {
  const logoContainerRef = useRef<HTMLAnchorElement>(null);
  type NavData = {
    name: string;
    route: string;
    dropDown?: Array<{ name: string; subRoute: string }>;
  };
  const pathName = usePathname();
  const navDataList: Array<NavData> = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    {
      name: "Services",
      route: "services",
      dropDown: [
        {
          name: "Application Delivery",
          subRoute: "/services/applicationDelivery",
        },
        {
          name: "Siyzo Cloud",
          subRoute: "/services/siyzoCloud",
        },
        {
          name: "Siyzo ERP Management",
          subRoute: "/services/siyzoERPManagement",
        },
        {
          name: "Digital Marketing",
          subRoute: "/services/digitalMarketing",
        },
        {
          name: "Networking",
          subRoute: "/services/networking",
        },
        {
          name: "Security",
          subRoute: "/services/security",
        },
      ],
    },
    { name: "Portfolio", route: "portfolio" },
    // { name: "Blog", route: "blog" },
    { name: "Contact", route: "contact" },
  ];
  return (
    <>
      <header
        id="header"
        className="fixed h-[4rem] top-0 flex flex-wrap w-full bg-gray-100 text-black header font-semibold text-sm justify-center z-10"
        // style={{
        //   background:
        //     "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)",
        // }}
      >
        <Link
          href="/"
          className="mr-auto ml-[10%] mt-auto mb-auto"
          ref={logoContainerRef}>
          <Image
            src="/Siyzo-Logo.svg"
            alt="Siyzo Logo"
            width={100}
            height={100}
          />
          {/* <Logo></Logo> */}
        </Link>
        {/* TODO: Add aira hidden */}
        <nav
          id="navbar"
          className="mr-auto mt-auto mb-auto align-middle hidden md:block">
          <ul className="flex flex-wrap justify-center w-max gap-6 h-max relative">
            {navDataList.map((navData) => (
              <li key={navData.name} className="dropdownHead">
                <Link
                  href={`/${navData.route}`}
                  className="flex flex-wrap align-middle hover:text-[var(--primary)]"
                  style={
                    navData.name === "Home"
                      ? pathName === "/"
                        ? { color: "var(--primary)" }
                        : {}
                      : pathName.includes(navData.route)
                      ? { color: "var(--primary)" }
                      : {}
                  }>
                  {navData.name}
                  {navData.dropDown ? (
                    <IoMdArrowDropdown
                      style={{ marginTop: "3.5px", marginLeft: "1px" }}
                    />
                  ) : null}
                </Link>
                {navData.dropDown ? (
                  <div className=" bg-white text-black px-2 py-4 absolute -translate-x-10 dropdownContent">
                    <ul className="top-0">
                      {navData.dropDown.map((dropdownData) => (
                        <li
                          key={dropdownData.name}
                          className="py-2 hover:bg-[var(--primary)] hover:text-white"
                          style={
                            pathName.includes(dropdownData.subRoute)
                              ? {
                                  backgroundColor: "var(--primary)",
                                  color: "white",
                                }
                              : {}
                          }>
                          <Link href={dropdownData.subRoute} className="p-4">
                            {dropdownData.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div
          className=" md:hidden mt-auto mb-auto mr-6 flex"
          onClick={() => {
            document
              .getElementById("hamburgerNavField")
              ?.classList.toggle("hidden");
          }}>
          <GiHamburgerMenu className="text-primaryColor w-[1.5rem] h-auto my-auto " />
        </div>
        <div
          id="hamburgerNavField"
          className="hidden mr-auto ml-auto w-full md:hidden sticky text-black">
          <nav
            id="navbar"
            className="mr-auto mt-auto mb-auto align-middle bg-white">
            <ul className="grid w-full h-max">
              {navDataList.map((navData) => (
                <li
                  key={navData.name}
                  className=" px-8 py-3 font-semibold hover:bg-[var(--primary)] hover:text-white dropdownHead"
                  style={
                    navData.name === "Home"
                      ? pathName === "/"
                        ? { backgroundColor: "var(--primary)", color: "white" }
                        : {}
                      : pathName.includes(navData.route)
                      ? { backgroundColor: "var(--primary)", color: "white" }
                      : {}
                  }>
                  <Link
                    href={`${navData.route}`}
                    className="flex flex-wrap align-middle">
                    {navData.name}
                    {navData.dropDown ? (
                      <IoMdArrowDropdown
                        style={{ marginTop: "3.5px", marginLeft: "1px" }}
                      />
                    ) : null}
                  </Link>
                  {navData.dropDown ? (
                    <div className=" bg-white text-black px-2 py-4 absolute dropdownContent translate-x-7">
                      <ul className="top-0">
                        {navData.dropDown.map((dropdownData) => (
                          <li
                            key={dropdownData.name}
                            className="py-2 hover:bg-[var(--primary)] hover:text-white"
                            style={
                              pathName.includes(dropdownData.subRoute)
                                ? {
                                    backgroundColor: "var(--primary)",
                                    color: "white",
                                  }
                                : {}
                            }>
                            <Link href={dropdownData.subRoute} className="p-4">
                              {dropdownData.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
