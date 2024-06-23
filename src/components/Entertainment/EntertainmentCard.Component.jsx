import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div>
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://in.bmscdn.com/discovery-catalog/collections/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/esports-collection-202011150107.png",
    "https://in.bmscdn.com/discovery-catalog/collections/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/art-and-crafts-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/theatre-shows-collection-202012041128.png",
    "https://in.bmscdn.com/discovery-catalog/collections/adventure-collection-202010140844.png",
  ];

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard key={index} src={image} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
