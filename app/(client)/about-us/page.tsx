import AboutCards from "@/components/client/landing/about/about-card";
import Programs from "@/components/client/landing/programcard";
import Image from "next/image";
import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { GiDiamondTrophy, GiTargetArrows, GiTargetShot } from "react-icons/gi";

const AboutPage = () => {
  return (
    <main className="w-full">
      <section className="relative h-[40vh] sm:h-[40vh] md:h-[60vh] p-10">
        {/* <div className="relative rounded-xl sm:rounded-2xl"> */}
        <Image
          src={"/about.png"}
          alt="About section Image"
          fill
          className="object-right object-cover h-auto  md:object-center "
        />
        {/* </div> */}
        <div className="absolute inset-0 z-10 bg-black/10  bg-linear-to-r from-white via-white/1 to-transparent "></div>
        <div className="relative z-30 py-15 px-10 flex flex-col ">
          <p className="text-sm text-blue-400">About Us</p>
          <h1 className="text-gray-800 font-bold text-2xl">Learn Today,</h1>
          <h1 className="text-blue-500 text-3xl font-bold ">Lead Tomorrow</h1>
          <p className="text-sm text-gray-700 font-serif">
            At MKSH Academy, we believe education is more than just knowledge{" "}
            <br />
            it's the foundation for a brighter future.
          </p>
        </div>
      </section>
      <div className="p-5 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 h-[40vh] ">
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
      <div className="mt-10 ">
        <h3>OUR MISSION, VISION & VALUES </h3>
        <h1>Guided by Purpose , Driven by Excellence</h1>

        <AboutCards
          icon={<GiTargetShot />}
          name="Our Mission"
          description="To provide"
        />

        <AboutCards icon={<BsEyeFill />} name="Our Vision" description="" />

        <AboutCards
          icon={<GiDiamondTrophy />}
          name="Our Values"
          description=""
        />
      </div>
    </main>
  );
};

export default AboutPage;
