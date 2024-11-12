import Image from "next/image";
import Navbar from "../components/reusable/navbar";
import Herosection from "@/components/reusable/herosection";
import Features from "@/components/reusable/features";
import Merchant from "@/components/reusable/Merchant";
import Goals from "@/components/reusable/golas";
import Stories from "@/components/reusable/stories";
import Faq from "@/components/reusable/faq";
import Footer1 from "@/components/reusable/footer1";
import Footer2 from "@/components/reusable/mainfooter";
export default function Home() {
  return (
<>
<Navbar/>
<Herosection/>
<Features/>
<Merchant/>
<Goals/>
<Stories/>
<Faq/>
<Footer1/>
<Footer2/>
</>
  );
}
