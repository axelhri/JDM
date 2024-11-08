import React, { useRef, useEffect } from "react";
import styles from "../CSS/header.module.css";
import headerImg2 from "../images/img3.jpg";
import video from "../images/44774-440000874.mp4";

function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the playback speed of the video to 0.5x (or another value if preferred)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Adjust the value as needed (0.5x speed, 0.75x, etc.)
    }
  }, []);

  return (
    <header id={styles.header}>
      <div className={styles.mobileHeader}>
        <div className={styles.imgContainer}>
          <h1>Bienvenue aux Jardins de Magotte</h1>
          <p>
            Votre maraîcher bio situé à Vendegies-sur-Écaillon. Nous cultivons
            avec passion des légumes et fruits de saison bio{" "}
            <span>
              <i className="fa-brands fa-envira"></i>
            </span>{" "}
            pour vous offrir le meilleur de la nature !
          </p>
        </div>
      </div>
      <div className={styles.desktopImgContainer}>
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        />

        <div className={styles.headerImg}>
          <div className={styles.imgBefore}>
            <img src={headerImg2} alt="" />
          </div>
          <div>
            <h1>Bienvenue aux Jardins de Magotte</h1>
            <p>
              Votre maraîcher bio situé à Vendegies-sur-Écaillon. Nous cultivons
              avec passion des légumes et fruits de saison bio{" "}
              <span>
                <i className="fa-brands fa-envira"></i>
              </span>{" "}
              pour vous offrir le meilleur de la nature !
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
