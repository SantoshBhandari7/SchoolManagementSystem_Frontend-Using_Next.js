import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <main className="w-ful  ">
      <section className="min-h-screen">
        <div className="relative h-[32vh] ">
          <Image
            src={"/contact.png"}
            alt="Contact Photo"
            fill
            className="object-cover object-right md:object-center z-1"
          />
          <div className="absolute inset-0 z-10 bg-linear-to-r from via-white/10 to to-black/40"></div>
          <div className="relative flex  flex-col z-30 px-10 py-8">
            <p className="font-medium text-sm text-gray-100">Get in Touch_</p>
            <h1 className="font-bold text-2xl text-black sm:text-black lg:text-white mb-2">
              Contact Us
            </h1>
            <p className="text-xs font-normal">
              Have questions about admission ,programs or our academy?
            </p>
            <p className="text-xs font-normal">
              We are here to help you. Feel free to reach out to us.
            </p>
          </div>
        </div>
        <div className="w-full min-h-[40vh]  bg-white/30 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 p-6">
          <div className="flex flex-col ">
            <h1 className="font-bold">Our Contact Information</h1>
            <p>
              We welcome students, parents, and visitors to connect with MKSH
              Academy.
            </p>
            <p>
              Feel free to contact us for information about admissions, academic
              programs, facilities, and other inquiries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="flex flex-col gap-0.5 border  w-60 h-fit p-2 m-2 rounded-md transition-all duration-300 hover:scale-[1.05]">
                <h1 className="text-md font-semibold">Our Address </h1>
                <h4 className=" font-medium text-sm">MKSH Academy</h4>
                <p className="text-sm sm:text-sm md:text-xs">
                  Kathmandu, Nepal
                </p>
              </div>
              <div className="flex flex-col gap-0.5 border  w-60 h-fit p-2 m-2 rounded-md  transition-all duration-300 hover:scale-[1.05]">
                <h1 className="text-md font-semibold">Phone</h1>
                <p className="text-sm sm:text-sm md:text-xs">+977 014312739</p>
                <p className="text-sm sm:text-sm md:text-xs">+977 9812345678</p>
              </div>
              <div className="flex flex-col gap-0.5 border w-60 h-fit p-2 m-2 rounded-md  transition-all duration-300 hover:scale-[1.05]">
                <h1 className="text-md font-semibold">Email</h1>
                <p className="tracking-tight text-sm sm:text-sm md:text-xs">
                  info@mkshacademy.edu.np
                </p>
                <p className="tracking-tight  text-sm sm:text-sm md:text-xs">
                  admission@mkshacademy.edu.np
                </p>
              </div>
              <div className="flex flex-col gap-0.5 border  w-60 h-fit p-2 m-2 rounded-md  transition-all duration-300 hover:scale-[1.05]">
                <h1 className="text-md font-semibold">Office Hours</h1>
                <p className="text-sm sm:text-sm md:text-xs">Sunday - Friday</p>
                <p className="text-sm sm:text-sm md:text-xs">
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1>Send Us a Message</h1>
            <p>
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
