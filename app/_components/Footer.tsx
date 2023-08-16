import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  const footerContent = {
    usefulLinks: [
      { name: "Home", link: "/" },
      { name: "About us", link: "/about" },
      { name: "Services", link: "/services" },
      { name: "Cookie-Policy", link: "/cookiePolicy" },
      { name: "Terms of Policy", link: "/termsOfPolicy" },
      { name: "Privacy Policy", link: "/privacyPolicy" },
    ],
    services: [
      { name: "Consultation", link: "#" },
      { name: "Web Development", link: "#" },
      { name: "ERP Management", link: "/services/siyzoERPManagement" },
      { name: "Digital Marketing", link: "#" },
      { name: "Networking", link: "#" },
    ],
  };
  return (
    <footer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] relative bg-[#151515] text-white [&>section]:p-8 [&>section>ul]:pl-2 [&>section>ul]:grid [&>section>ul]:gap-3 [&>section>h4]:mb-4 [&>section>ul>li:hover]:text-primaryColor [&>section>ul>li]:transition-all [&>section>ul>li:hover]:underline [&>section>ul>li:hover]:underline-offset-4 [&>section>ul>li]:text-sm [&>section>ul>li]:overflow-x-visible">
      <section className="flex" id="companyInfo">
        <div className="ml-auto mr-auto md:ml-auto md:mr-[unset] ">
          <h3>
            <span>
              <Link href="/">
                <Image
                  src="/Siyzo-Logo.svg"
                  alt="Siyzo Company Logo"
                  height={150}
                  width={150}
                />
              </Link>
            </span>
          </h3>
          <p>
            4th Floor, Computer Bazar, Putalisadak <br /> Kathmandu, Nepal
            <br />
            <br />
            <strong>Phone:</strong> +977 98513-50495
            <br />
            <strong>Email:</strong> team@siyzo.com
            <br />
          </p>
          <div className="flex gap-4 mt-3">
            <Link
              href="https://www.linkedin.com/company/siyzo/"
              className="linkedin">
              <FaLinkedin size="1.5rem" />
            </Link>
            <Link href="https://twitter.com/SiyZoOfficial" className="twitter">
              <i className="bx bxl-twitter"></i>
              <FaTwitter size="1.5rem" />
            </Link>
            <Link
              href="https://www.facebook.com/SiyZoOfficial"
              className="facebook">
              <FaFacebook size="1.5rem" />
            </Link>
          </div>
        </div>
      </section>

      <section className="" id="usefulLinks">
        <h4>
          <b>Useful Links</b>
        </h4>
        <ul>
          {footerContent.usefulLinks.map((item) => (
            <li className="flex" key={item.name}>
              <FaAngleRight className="my-auto text-primaryColor" />
              <Link href={item.link} className="my-auto ">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="" id="services">
        <h4>
          <b>Our Services</b>
        </h4>
        <ul>
          {footerContent.services.map((item) => (
            <li className="flex" key={item.name}>
              <FaAngleRight className="my-auto text-primaryColor" />
              <Link href={item.link} className="my-auto ">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="">
        <h4>
          <b>NewsLetter</b>
        </h4>
        <p>Click subscription button for our latest updates.</p>
        <input type="text" className="max-w-[20rem] p-2 rounded-s" />
        <button className="bg-primaryColor mt-4 p-2 rounded-e text-[#151515] ">
          Subscribe
        </button>
      </section>
      <section className="bg-black col-span-full text-center">
        © Copyright <strong>SiyZo Solutions</strong>{" "}
        <span className="text-sm">All Rights Reserved</span> <br />
        <span className="text-xs">
          Designed by{" "}
          <Link
            href="/"
            className="text-blue-500 underline hover:text-primaryColor">
            SiyZo Solutions
          </Link>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
