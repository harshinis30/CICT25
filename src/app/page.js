"use client"
import React, { useState, useEffect } from 'react';
import './loader.css';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    const checkAllImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', checkAllImagesLoaded);
        img.addEventListener('error', checkAllImagesLoaded); // Handle broken images
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', checkAllImagesLoaded);
        img.removeEventListener('error', checkAllImagesLoaded);
      });
    };
  }, []);

  return (
    <div className="main">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <h1>Content Loaded</h1>
          <img src="https://via.placeholder.com/600x400" alt="Placeholder 1" />
          <img src="https://via.placeholder.com/800x400" alt="Placeholder 2" />
          <img src="https://via.placeholder.com/400x400" alt="Placeholder 3" />
        </div>
      )}
    </div>
  );
};

export default Page;
