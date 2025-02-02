// components/MainBanner.js
import AboutBanner from "./about/AboutBanner";
import ServicesBanner from "./services/ServicesBanner";
import styles from "./HeroBanner.module.css";
import ProjectNavigator from "./projects/ProjectNavigator";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerWrapper}>
      <div className={styles.heroBanner}>
        <AboutBanner />
        <ServicesBanner />
        <ProjectNavigator />
      </div>
    </div>
  );
};

export default HeroBanner;