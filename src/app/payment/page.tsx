import dynamic from "next/dynamic";
import { Metadata } from "next";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const PaymentMainSection = dynamic(
  () => import("@/components/payment/MainSection")
);

export const metadata: Metadata = {
  title: "Payment | Saikat Tanti",
  description:
    "Secure payment page for Saikat Tanti's software development and consulting services.",
  alternates: {
    canonical: "/payment",
  },
};

const Home = () => {
  return (
    <PageBox>
      <PaymentMainSection />
    </PageBox>
  );
};

export default Home;
