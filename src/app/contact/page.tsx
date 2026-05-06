import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Divine Chukwu — DevOps & backend engineer.",
};

export default function ContactPage() {
  return (
    <div className="pt-12">
      <ContactSection variant="full" />
    </div>
  );
}
