"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBookOpen, LuGraduationCap, LuSchool } from "react-icons/lu";
import { TbDashboard } from "react-icons/tb";

type TTSideBarItems = {
  id: string;
  label: string;
  link: string;
  icon: React.ReactNode;
};

const items: TTSideBarItems[] = [
  {
    label: "Dashboard",
    id: "dashboard",
    link: "/teacher",
    icon: <TbDashboard size={30} />,
  },
  {
    label: "Student",
    id: "student",
    link: "/teacher/students",
    icon: <LuGraduationCap size={30} />,
  },
  {
    label: "Subjects",
    id: "subject",
    link: "/teacher/subjects",
    icon: <LuBookOpen size={30} />,
  },
  {
    label: "Classes",
    id: "class",
    link: "/teacher/classes",
    icon: <LuSchool size={30} />,
  },
];

const SidebarContent = () => {
  return (
    <section className="flex flex-col gap-1 px-1 py-1">
      {items.map((item) => (
        <SidebarItems key={item.id} item={item} />
      ))}
    </section>
  );
};

const SidebarItems = ({
  item: { label, link, icon },
}: {
  item: TTSideBarItems;
}) => {
  const pathName = usePathname();
  return (
    <Link href={link}>
      <div
        className={`flex gap-1 items-center py-3 border border-gray-300 px-1 rounded
           text-gray-600 hover:text-white hover:bg-blue-500 transition-all duration-300 
           ${pathName === link ? "bg-blue-600 text-white" : ""} `}
      >
        {icon}
        <span className="font-semibold">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarContent;
