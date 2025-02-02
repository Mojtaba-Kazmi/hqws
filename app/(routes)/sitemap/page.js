import Sitemap from "./components/sitemap/Sitemap";
import menuItems from "../../content/sitemap/menu-items";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Sitemap | HQWS - Rendering & Walling Services in Adelaide",
  description:
    "Explore the HQWS sitemap to find all our pages, including rendering, walling, texture coating, and painting services in Adelaide.",
  openGraph: {
    title: "Sitemap | HQWS - Rendering & Walling Services in Adelaide",
    description:
      "Navigate through HQWS's sitemap to quickly find our services, blog, contact, and more. Explore expert rendering and walling solutions in Adelaide.",
  },
});

const SitemapPage = () => {
  return (
    <div>
      <Sitemap menuItems={menuItems} />
    </div>
  );
};

export default SitemapPage;