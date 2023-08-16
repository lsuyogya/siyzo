import Image from "next/image";
import PortfolioShowcase from "./PortfolioShowcase";
import CountImg from "@/public/counts-img.jpg";
import { BiSmile } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaAward } from "react-icons/fa";
import AchievementCard from "./AchievementCard";

const page = () => {
  const stats = { clients: 70, projects: 55, years: 5, awards: 2 };
  const iconClass = "w-[3rem] lg:w-[4rem] h-auto align-top text-primaryColor";
  return (
    <main className="grid gap-28 px-[10%]">
      <PortfolioShowcase />
      <section
        id="achievements"
        className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-6 lg:gap-16 ">
        <Image
          src={CountImg}
          alt=""
          className=" aspect-square w-full h-[80%] object-cover"
        />
        <article>
          <h2 className="text-3xl font-semibold mb-8">
            We provide you the best IT services.
          </h2>
          <p>
            SiyZo solutions provide the best IT services as per the requirement
            of the client. We listen to you, find problem and provide you the
            best solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            <AchievementCard
              stat={stats.clients}
              txt="We are getting very good response and feedback from our clients."
              strongTxt="Happy Clients">
              <BiSmile className={iconClass} />
            </AchievementCard>

            <AchievementCard
              stat={stats.projects}
              strongTxt="Projects"
              txt="Our project ration is increasing day
                by day.">
              <BsFillJournalBookmarkFill className={iconClass} />
            </AchievementCard>

            <AchievementCard
              strongTxt="Years of experience"
              stat={stats.years}
              txt="We are providing different
                IT services to our clients for more then 5 years.">
              <SlCalender className={iconClass} />
            </AchievementCard>

            <AchievementCard
              stat={stats.awards}
              strongTxt="Awards"
              txt="In the process.">
              <FaAward className={iconClass} />
            </AchievementCard>
          </div>
        </article>
      </section>
    </main>
  );
};

export default page;
