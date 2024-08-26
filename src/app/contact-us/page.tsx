import About from "@/components/about/about";
import { CardsPaymentMethod } from "@/components/card/card";
import { CardsReportIssue } from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navBar/nav";
import { CarouselSize } from "@/components/testmonial/testmony";

export default function Home() {
  return   <> <Navbar/>
<About/>
<div className="sm:ml-[180px] sm:mb-[70px]"><CarouselSize/> </div>

<Footer/></> 
//   <div className="">
//     <Navbar/>
//     {/* <CardsPaymentMethod/>
//     <div className="sm:ml-[60px]">
//         <h1 className="font-semibold">Have Any Question?</h1>
//         <div className=" w-[360px]">It is a long established fact that a reader will be distracted content of a page when looking.</div>
//     </div>
//     <CardsReportIssue/> */}
//     {/* <Footer/> */}
//     {/* <CarouselSize/> */}
//   </div>

  
}
