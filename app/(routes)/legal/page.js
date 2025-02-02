import { getPrivacyPolicyData } from "../../shared/utils/getPrivacyPolicyData";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy | HQWS - Your Data, Our Commitment",
  description:
    "Read the HQWS Privacy Policy to understand how we collect, use, and protect your personal information while providing rendering and walling services in Adelaide.",
  openGraph: {
    title: "Privacy Policy | HQWS - Your Data, Our Commitment",
    description:
      "Learn how HQWS ensures data protection and privacy for clients seeking rendering and walling services in Adelaide. Your privacy is our priority.",
  },
});

export default async function LegalPage() {
  const privacyPolicyData = await getPrivacyPolicyData();

  return <PrivacyPolicy privacyPolicyData={privacyPolicyData} />;
}