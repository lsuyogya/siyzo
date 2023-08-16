import Link from "next/link";
import React from "react";

const ServiceCard = ({
  children,
  name,
  details,
  href,
}: {
  children: React.ReactNode;
  name: string;
  details: string;
  href: string;
}) => {
  return (
    <Link
      href={`services/${href}`}
      className="grid gap-4 border-1 hover:border-primaryColor p-12 place-items-center">
      <div className="p-6 bg-primaryColor rounded">{children}</div>
      <strong className="text-xl">{name}</strong>
      <p className="text-justify line-clamp-4">{details}</p>
    </Link>
  );
};

export default ServiceCard;
