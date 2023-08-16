import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = ({ navType }: { navType: "BigScreen" | "SmallScreen" }) => {
  const pathName = usePathname();
  type NavData = {
    name: string;
    route: string;
    dropDown?: Array<{ name: string; subRoute: string }>;
  };
  const navDataList: Array<NavData> = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    {
      name: "Services",
      route: "services",
      dropDown: [
        {
          name: "Application Delivery",
          subRoute: "services/applicationDelivery",
        },
        {
          name: "Siyzo Cloud",
          subRoute: "services/siyzoCloud",
        },
        {
          name: "Siyzo ERP Management",
          subRoute: "services/siyzoERPManagement",
        },
        {
          name: "Digital Marketing",
          subRoute: "services/digitalMarketing",
        },
        {
          name: "Networking",
          subRoute: "services/networking",
        },
        {
          name: "Security",
          subRoute: "services/security",
        },
      ],
    },
    { name: "Portfolio", route: "portfolio" },
    { name: "Blog", route: "blog" },
    { name: "Contact", route: "contact" },
  ];
  if ((navType = "BigScreen"))
    return (
      <nav
        id="navbar"
        className="mr-auto mt-auto mb-auto align-middle hidden md:block">
        <ul className="flex flex-wrap justify-center w-max gap-6 h-max relative">
          {navDataList.map((navData) => (
            <li key={navData.name} className="dropdownHead">
              <Link
                href={`${navData.route}`}
                className="flex flex-wrap align-middle hover:text-primaryColor"
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
                        className="py-2 hover:bg-primaryColor hover:text-white"
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
    );
  if (navType === "SmallScreen") {
    return (
      <nav
        id="navbar"
        className="mr-auto mt-auto mb-auto align-middle bg-white">
        <ul className="grid w-full h-max">
          {navDataList.map((navData) => (
            <li
              key={navData.name}
              className=" px-8 py-3 font-semibold hover:bg-primaryColor hover:text-white dropdownHead"
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
                        className="py-2 hover:bg-primaryColor hover:text-white"
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
    );
  }
};

export default Nav;
