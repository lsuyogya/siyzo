import Image from "next/image";
import Link from "next/link";
import {
  RiCloudLine,
  RiMarkupLine,
  RiCalendarTodoLine,
  RiMastodonLine,
  RiDatabase2Line,
} from "react-icons/ri";

import style from "@/app/_styles/home.module.scss";

export default function Home() {
  const serviceCardClass =
    "border-1 border-[rgba(225,225,225,0.3)] p-8 font-bold text-xl hover:border-primaryColor ease-in duration-200 text-center grid place-content-center gap-2";
  const iconClass = "place-self-center text-primaryColor w-[2rem] h-auto";

  //js
  return (
    <main className="px-0 py-0 -mb-16">
      {/* <Image
        src={"/hero-bg.jpg"}
        alt="Siyzo Solutions Home Background"
        width={100000}
        height={100000}
        priority
        style={{ objectFit: "cover", objectPosition: "top" }}
        // className="absolute w-full  brightness-[0.4] -z-10"
      /> */}

      <section
        id="homePage"
        className={`text-white min-h-screen pt-24 md:pt-0`}
        style={{
          background: `url('/home-bg1.jpg') top center`,
          objectFit: "contain",
        }}>
        <div className="grid place-content-center gap-2 min-h-screen background-[rgba(0, 0, 0, 0.5)]">
          <h1 className="text-4xl md:text-6xl font-black text-center">
            Simplify Your Zone
          </h1>
          <h2 className="text-center text-xl ">
            We provide you the best IT services.
          </h2>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 place-content-center p-8">
            <div className={serviceCardClass}>
              <RiMarkupLine className={iconClass} />
              <h3>
                <Link href="">Application Delivery</Link>
              </h3>
            </div>

            <div className={serviceCardClass}>
              <RiCloudLine className={iconClass} />
              <h3>
                <Link href="">SiyZo Cloud</Link>
              </h3>
            </div>

            <div className={serviceCardClass}>
              <RiCalendarTodoLine className={iconClass} />
              <h3>
                <Link href="">ERP Management</Link>
              </h3>
            </div>

            <div className={serviceCardClass}>
              <RiMastodonLine className={iconClass} />
              <h3>
                <Link href="">Networking</Link>
              </h3>
            </div>

            <div className={serviceCardClass}>
              <RiDatabase2Line className={iconClass} />
              <h3>
                <Link href="">Security</Link>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
