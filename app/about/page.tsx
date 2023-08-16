"use client";
import React from "react";
import Image from "next/image";
import aboutImage from "@/public/about.jpg";
import style from "@/app/_styles/about.module.scss";
import Slider from "./Slider";
import featuresImg from "@/public/features.jpg";
import { BiReceipt, BiSupport, BiShare, BiRevision } from "react-icons/bi";
import FeatureBox from "./FeatureBox";

const page = () => {
  const titleClass = "text-3xl font-bold";
  const contentGroupClass = "mt-4 grid gap-4";
  const iconClass = "w-11 h-max text-primaryColor";

  return (
    <main>
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Image
          src={aboutImage}
          alt=""
          className="h-auto w-full min-w-[200px] lg:col-start-2 col-start-1"
        />
        <div className="lg:col-start-1 lg:row-start-1 row-start-2 grid gap-4">
          <div className={`${contentGroupClass} `}>
            <h3 className={titleClass}>FEW REASON WHY TO CHOOSE US</h3>
            <p className=" text-justify">
              We are passionate about our work. Our designers stay ahead of the
              curve to provide engaging and user-friendly website designs to
              make your business stand out with your business pattern.
              <br /> SiyZo is an IT services company based in Nepal, providing
              comprehensive IT infrastructure solutions to clients across
              various industries. Our goal is to become a leading provider of IT
              infrastructure services, delivering value-added consulting,
              implementation, and managed services. With a focus on quality,
              innovation, and customer satisfaction, we aim to capture a
              significant share of the growing market demand for IT
              infrastructure solutions in Nepal and beyond.
            </p>
          </div>
          <div className={`${contentGroupClass}`}>
            <h3 className={titleClass}> SiyZo Experience Team </h3>
            <p className="text-justify">
              SiyZo&quot;s expertise and the experience of its knowledgeable
              experts are valuable assets that set the company apart. With a
              team of skilled professionals, SiyZo can provide high-quality
              services and innovative solutions to its clients. The expertise
              and experience of SiyZo&quot;s experts allow the company to
              understand clients&quot; unique challenges, offer tailored
              recommendations, and implement effective technology solutions. By
              leveraging their knowledge and staying up-to-date with the latest
              industry trends, SiyZo ensures that it can deliver exceptional
              results and help businesses achieve their goals. The expertise and
              experience of SiyZo&quot;s team are instrumental in providing
              reliable and efficient IT services to its clients, making SiyZo a
              trusted partner in simplifying business processes and driving
              growth.
            </p>
          </div>
        </div>
        {/* <div className="col-span-2 flex w-full gap-4 mt-4">
          {imgArray.map((src) => (
            <div className="ml-auto " key={src}>
              <Image src={src} width={100} height={100} alt="" className="" />
            </div>
          ))}
        </div> */}

        <Slider />
      </section>
      <section
        id="features"
        className="pt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <Image src={featuresImg} alt=""></Image>

        <div className="grid gap-6">
          <FeatureBox
            title="Problem"
            txt="Businesses having any kind of IT related problem can contact
            with us.">
            <BiReceipt className={iconClass} />
          </FeatureBox>

          <FeatureBox
            title="Consulting"
            txt="The key feature of SiyZo Solutions is free consultation, which helps to find client’s problems, requirements and so on in order to find the best solution.">
            <BiSupport className={iconClass} />
          </FeatureBox>

          <FeatureBox
            title="Services"
            txt="SiyZo Solutions provide different IT services as per the client requirement. We provide the best solution in small time-frame applying cost minimization technique.">
            <BiShare className={iconClass} />
          </FeatureBox>

          <FeatureBox
            title="Solution"
            txt="SiyZo Solutions provide different solutions as per the requirement
            of clients and client can choose the best services they want.">
            <BiRevision className={iconClass} />
          </FeatureBox>
        </div>
      </section>
    </main>
  );
};

export default page;
