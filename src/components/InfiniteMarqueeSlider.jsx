import React, { useState } from 'react';

const InfiniteMarqueeSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sample images - replace with your own
  const images = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5',
    'https://picsum.photos/300/200?random=6',
    'https://picsum.photos/300/200?random=7',
    'https://picsum.photos/300/200?random=8',
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const styles = {
    container: {
      width: '100%',
      height: '300px',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
    },
    marqueeWrapper: {
      display: 'flex',
      animation: hoveredIndex !== null ? 'none' : 'marquee 20s linear infinite',
      gap: '20px',
    },
    imageContainer: {
      flexShrink: 0,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    image: {
      width: '300px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    },
    '@keyframes marquee': {
      '0%': {
        transform: 'translateX(0)',
      },
      '100%': {
        transform: 'translateX(-100%)',
      },
    },
  };

  return (
    <div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .marquee-container {
            width: 100%;
            height: 300px;
            overflow: hidden;
            position: relative;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
          }
          
          .marquee-wrapper {
            display: flex;
            gap: 20px;
            animation: marquee 20s linear infinite;
          }
          
          .marquee-wrapper.paused {
            animation-play-state: paused;
          }
          
          .image-container {
            flex-shrink: 0;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .marquee-image {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }
          
          .image-container.hovered .marquee-image {
            transform: scale(1.1);
          }
          
          .image-container.dimmed .marquee-image {
            opacity: 0.3;
          }
          
          .image-container.normal .marquee-image {
            opacity: 1;
          }
        `}
      </style>
      
      <div className="marquee-container">
        <div className={`marquee-wrapper ${hoveredIndex !== null ? 'paused' : ''}`}>
          {/* Duplicate the images to create seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className={`image-container ${
                hoveredIndex !== null
                  ? hoveredIndex === index
                    ? 'hovered'
                    : 'dimmed'
                  : 'normal'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="marquee-image"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Infinite Marquee Slider</h2>
        <p>Hover over any image to pause the animation and see the zoom effect!</p>
      </div>
    </div>
  );
};

export default InfiniteMarqueeSlider;