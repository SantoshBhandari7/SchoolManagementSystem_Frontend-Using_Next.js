import React from "react";

interface IAboutProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const AboutCards = ({ icon, name, description }: IAboutProps) => {
  return (
    <div className="flex flex-col gap-2 border border-gray-300  rounded-md min-w-60 max-w-2xl h-fit p-3 transition-all duration-500 hover:scale-[1.05]">
      <p className="text-blue-700 font-bold">{icon}</p>
      <p className="text-lg font-semibold ">{name}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default AboutCards;
