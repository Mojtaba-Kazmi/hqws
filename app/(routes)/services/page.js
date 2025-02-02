import AllServices from "./components/services/AllServices";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Walling & Rendering Services in Adelaide | HQWS Experts",
  description:
    "Explore HQWS's premium walling, rendering, texture coating, and cladding services in Adelaide. Quality craftsmanship for homes & businesses.",
  openGraph: {
    title: "Expert Walling & Rendering Services in Adelaide | HQWS",
    description:
      "From acrylic rendering to texture coating, HQWS provides top-quality walling solutions in Adelaide. Enhance your property with expert craftsmanship.",
  },
});

async function getPaginatedServices(page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services/`,
      {
        cache: 'no-store',
        //next: { revalidate: 2592000 }, // Revalidate every 30 days (2592000 seconds)
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const allServices = await res.json();
    const SERVICES_PER_PAGE = 6;
    const totalServices = allServices.length;
    const pageCount = Math.ceil(totalServices / SERVICES_PER_PAGE);

    const sortedServices = allServices.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const paginatedServices = sortedServices.slice(
      (page - 1) * SERVICES_PER_PAGE,
      page * SERVICES_PER_PAGE
    );

    return { paginatedServices, pageCount };
  } catch (error) {
    console.error(error);
    return { paginatedServices: [], pageCount: 0 };
  }
}

export default async function ServicesPage({ searchParams }) {
  const awaitedSearchParams = await searchParams; // Await the searchParams object
  const page = parseInt(awaitedSearchParams?.page) || 1; // Safely access the `page` property

  const { paginatedServices, pageCount } = await getPaginatedServices(page);

  return (
    <>
      <AllServices
        paginatedServices={paginatedServices}
        page={page}
        pageCount={pageCount}
      />
    </>
  );
}
