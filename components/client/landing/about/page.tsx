import React from "react";
import AboutCards from "./about-card";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import {
  LuChartNoAxesCombined,
  LuUserRoundCheck,
  LuUsersRound,
} from "react-icons/lu";
import { BiBookOpen } from "react-icons/bi";

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-6  p-10 bg-gray-100 ">
      <div className=" flex flex-col px-12 gap-0.5">
        <h1 className="text-md text-gray-500 font-semibold">
          Why Choose MKSH Academy
        </h1>
        <h1 className="text-blue-500 font-semibold text-3xl">Why Choose Us?</h1>
        <p className="text-gray-600 text-sm">
          At MKSH Academy, we are committed to providing a supportive and <br />
          inspiring environment where students can learn, grow, and achieve
          their goals.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-8 sm:px-10 lg:px-12 gap-6">
        <AboutCards
          icon={<FaGraduationCap size={20} />}
          name="Quality Education"
          description="Student-centered and future-focused learning with a strong academic foundation."
        />
        <AboutCards
          icon={<LuUsersRound size={20} />}
          name="Experienced Faculty"
          description="Dedicated and qualified teachers who are committed to student success."
        />

        <AboutCards
          icon={<BiBookOpen size={20} />}
          name="Practical Learning"
          description="Hands-on learning and real-world projects that help students build valuable skills."
        />

        <AboutCards
          icon={<FaSchool size={20} />}
          name="Modern Facilities"
          description="Well-equipped classrooms, laboratories, library, and digital resources for better learning."
        />

        <AboutCards
          icon={<LuUserRoundCheck size={20} />}
          name="Student Development"
          description="Encouraging leadership, creativity, and teamwork through activities and programs."
        />

        <AboutCards
          icon={<LuChartNoAxesCombined size={20} />}
          name="Career & Higher Education"
          description="Guidance and support for future education, career opportunities, and personal growth."
        />
      </div>
    </section>
  );
};

export default AboutSection;
