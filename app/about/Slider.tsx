import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Slider = () => {
  const imgArray: Array<string> = [];
  for (let index = 1; index <= 7; index++) {
    imgArray.push(`/clients/client-${index}.png`);
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      customTransition="all .5"
      transitionDuration={500}
      customRightArrow={<></>}
      customLeftArrow={<></>}
      className="col-span-2 flex w-full mt-4 justify-between">
      {imgArray.map((src) => (
        <div className="ml-auto " key={src}>
          <Image src={src} width={100} height={100} alt="" className="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
