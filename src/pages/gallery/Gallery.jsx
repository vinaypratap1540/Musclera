import React from "react";
import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";

function Gallery() {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  // console.log(images); //Array of image/

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Explore our gallery and get a glimpse of our state-of-the-art
        facilities, equipment, and inspiring fitness community that awaits you
        at our gym.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`GalleryImage ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
