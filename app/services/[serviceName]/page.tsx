"use client";
import { useParams } from "next/navigation";

const ServicePage = () => {
  const params = useParams();
  return <main>{params.serviceName}</main>;
};

export default ServicePage;
