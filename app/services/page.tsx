import React from "react";
import ServiceCard from "./ServiceCard";
import { AiOutlineLaptop, AiOutlineCloudDownload } from "react-icons/ai";
import { BiCategory, BiVector } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const ServicesPage = () => {
  //To add a new service in thiis page, add an entry to the serviceList. In the icon section, add an svg(width-2rem, height auto) or a react-icon component (size 2 rem prop).
  const serviceList = [
    {
      name: "Application Delivery",
      href: "/applicationDelivery",
      details:
        "SiyZo Solutions provide the services simultaneously throughout the network to provide application availability, security, visibility and acceleration from the server to the end user.",
      icon: <AiOutlineLaptop size="2rem" />,
    },
    {
      name: "SiyZo Cloud",
      href: "/siyzoCloud",
      details:
        "SiyZo Solutions provide the cloud services as per the requirement of organization. Our organization first consult with its client understand the problem and provide the best cloud services for your organization.",
      icon: <AiOutlineCloudDownload size="2rem" />,
    },
    {
      name: "SiyZo ERP Management",
      href: "/siyzoERP",
      details:
        "SiyZo ERP gives the best service here as well by managing ERP software as per the requirement of the company. Automation, integration, and intelligence, which are the essential part to run day-to-day business operation and this is the work of the SiyZo Solutions, managing the essential part of the ERP software to run the business properly.",
      icon: <BiCategory size="2rem" />,
    },
    {
      name: "Digital Marketing",
      href: "/digitalMarketing",
      details:
        "Give Your Site, Put Eyes on High” is the slogan of the SiyZo for Digital Marketing. Digital Marketing is big ocean which include a lot of criteria like: content marketing, social media marketing, Email marketing, SEO, CRM (customer Relationship management), and so on, which is well handle by SiyZo Solutions.",
      icon: <FaGlobeAmericas size="2rem" />,
    },
    {
      name: "Networking",
      href: "/networking",
      details:
        "SiyZo Network Management is the best service provide by SiyZo Solutions. Consulting along with setup and management of networking are easily done by us. There are many clients using our service and we are getting the good feedback.",
      icon: <BiVector size="2rem" />,
    },
    {
      name: "Security",
      href: "/security",
      details:
        "Data migration, day-to-day replication, crash control, hack control and so on are the different services fall under security. SiyZo Solutions comes with firewall setup, port enable, disable and so on. SiyZo Solutions getting best feed back on it and many clients are taking this service.",
      icon: <MdSecurity size="2rem" />,
    },
  ];
  return (
    <main>
      <h1 className="pageTitle">Check Our Services</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {serviceList.map((service) => (
          <ServiceCard
            key={service.name}
            href={service.href}
            name={service.name}
            details={service.details}>
            {service.icon}
          </ServiceCard>
        ))}
      </section>
    </main>
  );
};

export default ServicesPage;
