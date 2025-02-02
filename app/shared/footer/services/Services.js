import servicesData from "../../../content/footer/services/services.json";  // Import from JSON file
import styles from "./Services.module.css";
import Link from "next/link"; // Import Link from Next.js for client-side navigation

const Services = () => {
  return (
    <section className={styles.section}>
      <h2>Our Services</h2>
      <ul>
        {servicesData.map((service, index) => (
          <li key={index}>
            <Link href={service.link}>
              <p className={styles.serviceLink}>{service.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;