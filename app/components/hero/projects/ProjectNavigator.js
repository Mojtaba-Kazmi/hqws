"use client";

import { useState } from "react";
import styles from "./ProjectNavigator.module.css";

const projects = [
  {
    id: 1,
    title: "Plympton Project",
    description:
      "Recent project completed: Hebel rendering, texture application, and painting successfully done in Plympton, SA.",
    image:
      "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737682876/IMG_4312_ppktyx.jpg",
  },
  {
    id: 2,
    title: "Evanston Gardens Project",
    description:
      "Recent project completed: Hebel rendering and texture application successfully done in Evanston Gardens, SA.",
    image:
      "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737682226/hebel-render-texutre-9_myr3zm.jpg",
  },
  {
    id: 3,
    title: "Rostrevor Project",
    description:
      "Recent project completed: Installing alfresco blue board render and texture in Rostrevor, SA.",
    image:
      "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737682965/IMG_4748_avuq6p.jpg",
  },
];

export default function ProjectNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeProject = (direction) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % projects.length
          : (prevIndex - 1 + projects.length) % projects.length
      );
      setIsFading(false);
    }, 300); // Delay before changing image
  };

  const { title, description, image } = projects[currentIndex];

  return (
    <div className={styles.hero}>
      <div className={styles.projectInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={() => changeProject("prev")}
          >
            Previous
          </button>
          <button
            className={styles.navButton}
            onClick={() => changeProject("next")}
          >
            Next
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          key={currentIndex} // Forces re-render on change
          src={image}
          alt={title}
          className={`${styles.projectImage} ${!isFading ? styles.active : ""}`}
        />
      </div>
    </div>
  );
}
