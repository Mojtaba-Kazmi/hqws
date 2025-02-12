import React from "react";
import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Image 
        src="https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737897009/HQWS-Logo-web_mhb0ic.svg"
        width={300}
        height={100}
        alt="HQWS Logo"
        priority
      />
      <div className={styles.loader}></div>
    </div>
  );
}