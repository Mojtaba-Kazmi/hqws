import About from "./components/about/About";
import FAQ from "./components/faq/FAQ";
import PageHeader from "../../shared/breadcrumbs/PageHeader";
import { welcomeData } from "../../content/about/welcome-data";
import { whyChooseData } from "../../content/about/why-choose";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "About HQWS | Expert Walling & Rendering in Adelaide",
  description:
    "Learn about HQWS, Adelaide's trusted experts in walling, rendering, texture coating, and more. Quality craftsmanship for residential & commercial properties.",
  openGraph: {
    title: "About HQWS | Trusted Walling & Rendering in Adelaide",
    description:
      "With years of experience, HQWS delivers high-quality walling, rendering, and texture coating services in Adelaide. Discover our expertise today.",
  },
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About High Quality Walling Services Pty Ltd"
        description="Expert walling, rendering, and cladding solutions in Adelaide. We specialize in durable, weather-resistant finishes for residential and commercial properties."
        breadcrumb="About Page"
      />
      <About welcomeData={welcomeData} whyChooseData={whyChooseData} />
      <FAQ />
    </>
  );
}
