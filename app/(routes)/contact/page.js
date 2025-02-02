import ContactForm from "../../components/form/ContactForm";
import PageHeader from "../../shared/breadcrumbs/PageHeader";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Contact HQWS | Get a Quote for Walling & Rendering in Adelaide",
  description:
    "Reach out to HQWS for expert walling, rendering, and texture coating services in Adelaide. Request a quote or consultation today!",
});

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with HQWS for expert walling services in Adelaide. Our team is ready to answer your queries and provide personalized solutions."
        breadcrumb="Contact Us"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
