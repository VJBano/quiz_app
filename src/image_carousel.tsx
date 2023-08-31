import React, { useEffect, useState } from 'react'
import './carousel.css'

interface ImageCarouselProps {
    images: string[];
  }

const Image_Carousel = ({images}:ImageCarouselProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    console.log("images: ", images[currentIndex])
  
    return (
      <div className="image-carousel">
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="carousel-image" />

        <div className='w-full flex justify-between flex-row'>
        <button type="button" onClick={goToPrevious} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Previous
        </button>
        
        <button type="button" onClick={goToNext} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next
        </button>
       
        </div>
        
      </div>
    );
}

export default Image_Carousel
