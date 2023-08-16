"use client";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import MapListItem from "./MapListItem";
import ContactForm from "./ContactForm";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

const ContactPage = () => {
  const mapCenters = [
    { lat: 27.706765396990793, lng: 85.32299185587708 },
    { lat: 29.738511360162907, lng: -95.60639420301183 },
  ];
  const mapOptions = {
    clickableIcons: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });
  console.log("isLoaded", isLoaded);
  console.log("loadError", loadError);

  if (!isLoaded) return <div>Loading maps...</div>;
  return (
    <main className="grid gap-24">
      <div className="grid gap-6">
        <h1 className="pageTitle">Contact Us</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid shadow-md rounded">
            <GoogleMap
              options={mapOptions}
              zoom={14}
              center={mapCenters[0]}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{
                width: "auto",
                height: "20rem",
                borderRadius: "0.25rem 0.25rem 0 0",
              }}>
              <MarkerF position={mapCenters[0]} />
            </GoogleMap>

            <ul className="grid gap-3 p-4">
              <MapListItem
                title="Location"
                details="4th floor Computer bazar, Putalisadak, Kathmandu">
                <FaLocationDot size="1.5rem" />
              </MapListItem>

              <MapListItem title="Email" details="team@siyzo.com">
                <IoIosMail size="1.5rem" />
              </MapListItem>

              <MapListItem title="Call" details="+977 98513-50495">
                <HiOutlineDevicePhoneMobile size="1.5rem" />
              </MapListItem>
            </ul>
          </div>

          <div className="grid shadow-md rounded">
            <GoogleMap
              options={mapOptions}
              zoom={14}
              center={mapCenters[1]}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{
                width: "auto",
                height: "20rem",
                borderRadius: "0.25rem 0.25rem 0 0",
              }}>
              <MarkerF position={mapCenters[1]} />
            </GoogleMap>
            <ul className="grid gap-3 p-4">
              <MapListItem
                title="Location"
                details="2382 S Dairy Ashford Rd
                Houston TX 77077
                United States">
                <FaLocationDot size="1.5rem" />
              </MapListItem>

              <MapListItem title="Email" details="ask@siyzo.com">
                <IoIosMail size="1.5rem" />
              </MapListItem>

              <MapListItem title="Call" details="+1 832-736-3420">
                <HiOutlineDevicePhoneMobile size="1.5rem" />
              </MapListItem>
            </ul>
          </div>
        </section>
      </div>

      <section>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
