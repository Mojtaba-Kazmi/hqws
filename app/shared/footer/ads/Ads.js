"use client";

import styles from "./Ads.module.css";
import ads from "../../../content/footer/ads/ads.json"; // Ensure the path to your ads.json is correct

function Ads() {
  return (
    <section className={styles.ads}>
      {ads.map((ad, index) => (
        <div key={index} className={styles.card}>
          <div className={styles["image-container"]}>
            <img
              src={ad.image}
              alt={ad.alt}
              width={400}
              height={900}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Ads;