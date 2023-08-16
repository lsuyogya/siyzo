"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsPlayFill, BsCircleFill } from "react-icons/bs";

const PortfolioShowcase = () => {
  const [active, setActive] = useState("All");
  type portfolioData = {
    name: string;
    img: string;
    type: "Service" | "Current Project" | "Business Affiliation";
  };
  //get from backend?
  const portfolioList: Array<portfolioData> = [
    {
      name: "ERP SOFTWARE MANAGEMENT",
      img: "/portfolio/ERP.jpg",
      type: "Service",
    },
    {
      name: "BITS PANDA",
      img: "/portfolio/portfolio-2.jpg",
      type: "Current Project",
    },
    {
      name: "IT Security",
      img: "/portfolio/IT-Security.jpg",
      type: "Service",
    },
    {
      name: "KPADHNE",
      img: "/portfolio/Kpadhne.jpg",
      type: "Business Affiliation",
    },
    {
      name: "HITECH",
      img: "/portfolio/portfolio-5.jpg",
      type: "Current Project",
    },
    {
      name: "CLOUD CONSULTING",
      img: "/portfolio/Cloud-Consulting.jpg",
      type: "Service",
    },
    {
      name: "GRESIA",
      img: "/portfolio/Gresia.jpg",
      type: "Business Affiliation",
    },
    {
      name: "M&R SOLUTIONS",
      img: "/portfolio/Mr-Solutions.jpg",
      type: "Business Affiliation",
    },
    {
      name: "ADVANCE GROUP",
      img: "/portfolio/portfolio-9.jpg",
      type: "Current Project",
    },
  ];

  const [filteredList, setFilteredList] = useState(portfolioList);
  //pagination code logic
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  function updateMaxPages(dataArray: Array<portfolioData>) {
    return Math.ceil(dataArray.length / pageSize);
  }
  const [maxPageCount, setMaxPageCount] = useState(
    updateMaxPages(filteredList)
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  //
  //   const [filteredList, ];
  let typeSet = new Set<string>();

  portfolioList.map((portfolio) => {
    typeSet.add(portfolio.type);
  });
  const typeList = Array.from(typeSet);

  //finters data and sets active
  function portfolioClickHandler(e: any) {
    e.preventDefault();
    setActive(e.target.id);
    if (e.target.id === "All") {
      setFilteredList(portfolioList);
      setMaxPageCount(updateMaxPages(portfolioList));
      setCurrentPage(1);
      return;
    }
    const filteredData = portfolioList.filter(
      (portfolio) => portfolio.type === e.target.id
    );
    setFilteredList(filteredData);
    setMaxPageCount(updateMaxPages(filteredData));
    setCurrentPage(1);
  }
  return (
    <section>
      <h1 className="pageTitle">Check our portfolio</h1>
      <div className="flex flex-wrap gap-4 place-content-center py-4">
        <button
          className="px-3 py-1 rounded hover:bg-primaryColor transition-all"
          id="All"
          onClick={portfolioClickHandler}
          style={active === "All" ? { backgroundColor: "var(--primary)" } : {}}>
          All
        </button>
        {typeList.map((type) => (
          <button
            key={type}
            id={type}
            className="px-3 py-1 rounded hover:bg-primaryColor transition-all"
            onClick={portfolioClickHandler}
            style={
              active === type ? { backgroundColor: "var(--primary)" } : {}
            }>
            {type}s
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {filteredList
          .slice(
            (currentPage - 1) * pageSize,
            (currentPage - 1) * pageSize + pageSize
          )
          .map((portfolio) => (
            <Image
              src={portfolio.img}
              alt=""
              width={500}
              height={500}
              key={portfolio.name}
              className="w-full mt-4 shadow-2xl object-cover"
            />
          ))}
        {/* pagination */}
        <div className="flex flex-wrap gap-10 w-full col-span-full">
          <button
            className="ml-auto disabled:text-gray-400"
            disabled={currentPage === 1}
            // style={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            <BsPlayFill size="1.5rem" style={{ transform: "rotate(180deg)" }} />
          </button>
          {[...Array(maxPageCount)].map((_, i) => (
            <div key={i} className="flex">
              <BsCircleFill
                size="0.5rem"
                className="mt-auto mb-auto text-gray-400"
                style={currentPage === i + 1 ? { color: "var(--primary)" } : {}}
              />
            </div>
          ))}
          <button
            className="mr-auto disabled:text-gray-400"
            disabled={currentPage === maxPageCount}
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            <BsPlayFill size="1.5rem" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
