import ContactForm from "../../components/form/ContactForm";
import PageHeader from "../../shared/breadcrumbs/PageHeader";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Get a Quote | Expert Rendering & Walling Services in Adelaide",
  description:
    "Request a free quote from HQWS for professional walling, rendering, and texture coating services in Adelaide. Get started today!",
  openGraph: {
    title: "Get a Quote | Expert Rendering & Walling Services in Adelaide",
    description:
      "Looking for expert walling and rendering services in Adelaide? Contact HQWS for a free quote and professional consultation today!",
  },
});

const GetFreeQuotePage = () => {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        description="Get a personalized, no-obligation quote for your walling project. HQWS offers expert services tailored to your needs in Adelaide."
        breadcrumb="Request a Quote"
      />
      <ContactForm />
    </>
  );
};

export default GetFreeQuotePage;
