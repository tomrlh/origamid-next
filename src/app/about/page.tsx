import Width from "@/components/width";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is the About page",
};

const AboutPage = () => {
  return (
    <main>
      <h2>About</h2>
      <Width />
    </main>
  );
};

export default AboutPage;
