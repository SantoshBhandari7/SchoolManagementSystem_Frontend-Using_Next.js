"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuBookOpen,
  LuGraduationCap,
  LuLayers,
  LuLayers3,
  LuSchool,
  LuUserRound,
} from "react-icons/lu";
import { TbDashboard } from "react-icons/tb";

type TSideBarItems = {
  id: string;
  label: string;
  link: string;
  icon: React.ReactNode;
};

const items: TSideBarItems[] = [
  {
    label: "Dashboard",
    id: "dashboard",
    link: "/admin",
    icon: <TbDashboard size={30} />,
  },
  {
    label: "Students",
    id: "student",
    link: "/admin/students",
    icon: <LuGraduationCap size={30} />,
  },
  {
    label: "Teachers",
    id: "teacher",
    link: "/admin/teachers",
    icon: <LuUserRound size={30} />,
  },
  {
    label: "Subjects",
    id: "subject",
    link: "/admin/subjects",
    icon: <LuBookOpen size={30} />,
  },
  {
    label: "Classes",
    id: "class",
    link: "/admin/classes",
    icon: <LuSchool size={30} />,
  },
  {
    label: "Programs",
    id: "program",
    link: "/admin/programs",
    icon: <LuLayers3 size={30} />,
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
  item: TSideBarItems;
}) => {
  const pathName = usePathname();
  return (
    <Link href={link}>
      <div className={`flex gap-1 items-center py-3 `}>
        {icon}
        <span className="font-semibold">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarContent;
