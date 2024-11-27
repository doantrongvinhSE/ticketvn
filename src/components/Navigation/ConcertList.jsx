import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ConcertList.css';



function ConcertList() {
  const concerts = [
    {
      name: "Enrique Iglesias",
      location: "Manchester",
      date: "Oct 17 - Oct 21",
      price: "$299.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
    },
    {
      name: "Ariana Grande",
      location: "London",
      date: "Oct 22 - Oct 24",
      price: "$199.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
    },
    {
      name: "Justin Beiber",
      location: "Manchester",
      date: "Oct 24 - Oct 29",
      price: "$199.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
    },
    {
      name: "Celen Dion",
      location: "Bristol",
      date: "Oct 28 - Oct 30",
      price: "$499.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
    },
    {
      name: "Celena Gomez",
      location: "London",
      date: "Oct 30 - Oct 31",
      price: "$299.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
    },
    {
      name: "Rihanna",
      location: "Bristol",
      date: "Dec 08 - Dec 12",
      price: "$599.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
    },
    {
        name: "Rihanna",
        location: "Bristol",
        date: "Dec 08 - Dec 12",
        price: "$599.99",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
      },
      {
        name: "Rihanna",
        location: "Bristol",
        date: "Dec 08 - Dec 12",
        price: "$599.99",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
      },
      {
        name: "Rihanna",
        location: "Bristol",
        date: "Dec 08 - Dec 12",
        price: "$599.99",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
      },
      {
        name: "Rihanna",
        location: "Bristol",
        date: "Dec 08 - Dec 12",
        price: "$599.99",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoT8K63Tv1tr2QY9J1163xo-Remfkx_-txg&s",
      },
  ];

  const settings = {
    dots: true, // Hiển thị chấm chuyển slide
    infinite: true, // Vòng lặp vô hạn
    speed: 500, // Thời gian chuyển slide (ms)
    slidesToShow: 8, // Số lượng mục hiển thị
    slidesToScroll: 1, // Số lượng mục cuộn mỗi lần
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 3000, // Thời gian mỗi slide (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-10">
      <div className="mx-auto px-4">
        {/* Thêm padding bên trong slider */}
        <Slider {...settings} className="px-10">
          {concerts.map((concert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center mx-4"
            >
              <img
                src={concert.image}
                alt={concert.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {concert.name}
              </h2>
              <p className="text-sm text-gray-500">
                {concert.location} {concert.date}
              </p>
              <p className="text-blue-600 font-bold mt-2">{concert.price}</p>
              <button className="mt-4 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>

    
  );
}

export default ConcertList;
