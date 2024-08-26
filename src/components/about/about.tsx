import Card from "./Card"
import Image from "next/image"
import mage from "@/image/image (1).png"
import magei from "@/image/image.png"
import magee from "@/image/image (3).png"
import magea from "@/image/image (2).png"
import cute from "@/image/Cute Boy With Big Wallet.png"

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section className="backgroudAbout  py-32 -z-40">
      <div className=" mx-auto w-full text-center space-y-5">
      <h2 className="font-extrabold text-[25px]">We are Naija Youth Entrepreneurship Network</h2>
        <h3>
          BestChat focusing on shaping the "future of communication" through
          technology and continued innovation.
        </h3>
      </div>

      <div className="px-4 md:container grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 mt-24">
        <Card
          icons={""}
          text="We listen to learn, practice and verify, improve and never stop. "
        />
        <Card
          icons={""}
          text="We're flexible, and consistently emphasizing the importance of work-life fit. "
        />
        <Card
          icons={""}
          text="We're seeking to break into new markets so we can bring our solutions to a broader audience. "
        />
        <Card
          icons={""}
          text="We're committed to inspiring workforces and businesses around the world, helping to pave the way forward for our people, customers, and industry. "
        />
      </div>
    </section>
  )
}

export default About
