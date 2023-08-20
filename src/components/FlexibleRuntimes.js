import React from "react";
import { Element } from "react-scroll";

const images = [
  "https://layers-development.nl/wp-content/uploads/2022/11/31191-Int-01-Bolstoen-unit-02A-scaled-1.jpeg",
  "https://layers-development.nl/wp-content/uploads/2022/10/HAARLEM-II.jpg",
  "https://layers-development.nl/wp-content/uploads/2022/10/31632-Ext-02.jpg",
  "https://layers-development.nl/wp-content/uploads/2022/11/03-Flexibel-en-koppelbaar.jpeg"
];

function FlexibleRuntimes() {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div
        className='bg-[#3a3c41] bg-cover bg-no-repeat flex items-center w-full gap-16 m-auto'
        style={{
          background:"#3a3c41",
          textAlign:"center",
         
        }}
      >
        <div className='mt-6 text-6xl font-bold w-1/2 text-white'>
          <h1>Flexibele ruimtes <br/>om jouw ideale werkplek <br/>te creëren</h1>
        </div>
        <div className='custom-scroll bg-transparent w-1/2 mt-24 h-screen overflow-y-scroll'>
          {images.map((image, index) => (
            <div key={index}>
              <img
                className='w-11/12 h-96 mb-24 rounded-xl object-cover'
                src={image}
                alt={`Img ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlexibleRuntimes;
