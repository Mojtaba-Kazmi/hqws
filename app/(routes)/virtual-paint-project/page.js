import VisualizeColorIframe from "./iframe/VisualizeColorIframe";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title:
    "Virtual Paint Project - Visualize Your Painting Ideas | HQWS",
  description:
    "Upload your home photo or explore paintable images with HQWS's Virtual Paint Project tool. Visualize your painting ideas and bring them to life with ease!",
  openGraph: {
    title:
      "Virtual Paint Project - Visualize Your Painting Ideas | HQWS",
    description:
      "Transform your ideas into reality with HQWS's Virtual Paint Project. Upload your home photo or browse paintable images to see your vision come to life. Try it today!",
    images: [
      {
        url: "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737897009/HQWS-Logo-web_mhb0ic.svg",
        width: 1200,
        height: 630,
        alt: "HQWS's Virtual Paint Project tool in action",
      },
    ],
    url: "https://www.hqws.com.au/virtual-paint-project",
  },
});

const VirtualPaintProjectPage = () => {
  return <VisualizeColorIframe />;
};

export default VirtualPaintProjectPage;
