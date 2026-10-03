import AboutCards from "@/components/client/landing/about/about-card";
import AboutSection from "@/components/client/landing/about/page";
import LinkSection from "@/components/client/landing/link-section";
import Programs from "@/components/client/landing/programcard";
import Image from "next/image";
import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { GiDiamondTrophy, GiTargetArrows, GiTargetShot } from "react-icons/gi";

const AboutPage = () => {
  return (
    <main className="w-full">
      <section className="relative h-[45vh] min-h-88 overflow-hidden sm:h-[50vh] md:h-[60vh]">
        {/* <div className="relative rounded-xl sm:rounded-2xl"> */}
        <Image
          src={"/about.png"}
          alt="About section Image"
          fill
          className="object-right object-cover  md:object-center z-1"
        />
        {/* </div> */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-white/80 via-white/20 to-transparent"></div>
        <div className="relative flex flex-col  z-20 h-full max-w-7xl py-20 px-6 sm:px-10 lg:px-16 ">
          <p className="text-sm mb-2 text-blue-500">About Us</p>
          <h1 className="text-gray-800 font-bold text-3xl sm:text-4xl md:text-5xl ">
            Learn Today,
          </h1>
          <h1 className="text-blue-500 text-4xl font-bold sm:text-5xl md:text-6xl">
            Lead Tomorrow
          </h1>
          <p className="text-sm text-gray-700 font-serif">
            At MKSH Academy, we believe education is more than just knowledge
            <br />
            it's the foundation for a brighter future.
          </p>
        </div>
      </section>
      <div className="grid p-5 items-center gap-8 md:grid-cols-2 lg:gap-12">
        <Image
          src={"/aboutphoto.png"}
          alt="About Photo"
          width={300}
          height={300}
          className="w-4xl sm:w-4xl lg:w-3xl md:w-3xl rounded-lg"
        />
        <div className="flex flex-col px-3">
          <h1 className="text-lg font-semibold font-serif text-blue-500  ">
            About MKSH Academy
          </h1>
          <h1 className=" font-bold text-xl">The Beginning of MKSH Academy</h1>
          <p className="text-sm font-normal">
            MKSH Academy was founded with a simple vision to provide quality
            education and create opportunities for every student to achieve
            their dreams. What started as a small initiative has grown into a
            trusted academic institution, known for its commitment to
            excellence, innovation, and holistic development. Today, we continue
            to inspire and empower young minds by offering a supportive learning
            environment, experienced faculty, and modern facilities.
          </p>
        </div>
      </div>
      <div className="px-18 py-12 sm:py-12 sm:px-16 md:px-17 md:py-14 bg-gray-200 lg:px-18 lg:py-16 ">
        <h3 className="text-md font-semibold  text-blue-500 ">
          OUR MISSION, VISION & VALUES
        </h3>
        <h1 className="font-bold text-2xl ">
          Guided by Purpose ,Driven by Excellence
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-7">
          <AboutCards
            icon={<GiTargetShot />}
            name="Our Mission"
            description="To provide quality education in a supportive environment that develops knowledge, skills, confidence, and strong values in every student."
          />

          <AboutCards
            icon={<BsEyeFill />}
            name="Our Vision"
            description="To become a leading educational institution that inspires lifelong learning, innovation, leadership, and meaningful contributions to society."
          />

          <AboutCards
            icon={<GiDiamondTrophy />}
            name="Our Values"
            description="We value integrity, excellence, respect, discipline, innovation, teamwork, and a commitment to the personal and academic growth of every student."
          />
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <LinkSection />
      </div>
    </main>
  );
};

export default AboutPage;
