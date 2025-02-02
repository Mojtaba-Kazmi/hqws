import dynamic from "next/dynamic";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";
import { getHomePageData } from "@/app/shared/utils/getHomePageData";
import Loading from "@/app/shared/loading/loading";
import PageHeader from "@/app/shared/breadcrumbs/PageHeader";

export const metadata = generatePageMetadata({
  title: "Our Recent Projects - HQWS",
  description:
    "Explore our recent successful projects at HQWS, specializing in Hebel rendering, texture application, and painting across various locations in Adelaide.",
  openGraph: {
    title: "Our Recent Projects - HQWS",
    description:
      "Discover the latest projects completed by HQWS, including Hebel rendering, texture application, and painting services in Adelaide.",
    images: [
      {
        url: "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737897009/HQWS-Logo-web_mhb0ic.svg",
        width: 1200,
        height: 630,
        alt: "HQWS Logo",
      },
    ],
    url: "https://www.hqws.com.au/projects",
  },
});

// Dynamically import Portfolio with a loading state (optional)
const Portfolio = dynamic(() => import("../../components/project/Portfolio"), {
  loading: () => <Loading />,
});

const PortfolioPage = async () => {
  const { getPortfolio } = await getHomePageData();

  return (
    <>
      <PageHeader
        title="Our Successful Projects"
        description="Take a look at some of our recent successful projects, where we have expertly installed Hebel and blue boards, completed a variety of cladding installations, applied render coatings, carried out sand cement plastering, and applied texture coatings. We also specialize in both outdoor and indoor painting, as well as foam and Hebel fencing, all across Adelaide."
        breadcrumb="Projects Page"
      />
      <Portfolio portfolio={getPortfolio} />;
    </>
  );
};

export default PortfolioPage;
