"use client";

import React from "react";
import Link from "next/link";
import {
  FaBook,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
  FaGraduationCap,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
  FaBell,
} from "react-icons/fa";

const StudentDashboard = () => {
  // Temporary data
  // Later, these will come from your backend
  const student = {
    name: "Santosh Bhandari",
    email: "santosh@gmail.com",
    rollNo: 12,
    className: "12",
    program: "Science",
  };

  const subjects = [
    {
      name: "Mathematics",
      creditHour: 4,
    },
    {
      name: "Physics",
      creditHour: 4,
    },
    {
      name: "Chemistry",
      creditHour: 4,
    },
    {
      name: "Computer Science",
      creditHour: 3,
    },
    {
      name: "English",
      creditHour: 3,
    },
  ];

  const notices = [
    "First terminal examination starts next week.",
    "College will remain closed on Friday.",
    "Submit your assignment before Sunday.",
  ];

  const schedule = [
    {
      subject: "Mathematics",
      time: "10:00 AM",
    },
    {
      subject: "Physics",
      time: "11:00 AM",
    },
    {
      subject: "Computer Science",
      time: "1:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b">
        <div className="flex h-full items-center justify-between px-6">
          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold text-blue-600">MKSH Academy</h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* Notification */}
            <button className="relative text-gray-600">
              <FaBell size={18} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                3
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FaUser />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">{student.name}</p>

                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-0 top-16 hidden h-[calc(100vh-64px)] w-64 bg-white border-r md:block">
        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/student/dashboard"
            className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-blue-600"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            href="/student/profile"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FaUser />
            My Profile
          </Link>

          <Link
            href="/student/subjects"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FaBook />
            My Subjects
          </Link>

          <Link
            href="/student/class"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FaUsers />
            My Class
          </Link>

          <Link
            href="/student/schedule"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FaCalendarAlt />
            Schedule
          </Link>

          <Link
            href="/student/results"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FaChartBar />
            Results
          </Link>

          <Link
            href="/student/settings"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            <FaCog />
            Settings
          </Link>

          <button className="mt-5 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-500 hover:bg-red-50">
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="pt-16 md:ml-64">
        <div className="p-4 sm:p-6">
          {/* Welcome */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Good Morning, {student.name.split(" ")[0]} 👋
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Welcome to your student dashboard.
            </p>
          </div>

          {/* ================= STAT CARDS ================= */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Class */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">My Class</p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-800">
                    {student.className}
                  </h2>
                </div>

                <div className="rounded-full bg-blue-100 p-4 text-blue-600">
                  <FaGraduationCap size={22} />
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Subjects</p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-800">
                    {subjects.length}
                  </h2>
                </div>

                <div className="rounded-full bg-green-100 p-4 text-green-600">
                  <FaBook size={22} />
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Program</p>

                  <h2 className="mt-2 text-xl font-bold text-gray-800">
                    {student.program}
                  </h2>
                </div>

                <div className="rounded-full bg-purple-100 p-4 text-purple-600">
                  <FaGraduationCap size={22} />
                </div>
              </div>
            </div>

            {/* Roll Number */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Roll Number</p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-800">
                    {student.rollNo}
                  </h2>
                </div>

                <div className="rounded-full bg-orange-100 p-4 text-orange-600">
                  <FaUser size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* ================= SUBJECTS ================= */}
            <div className="rounded-xl bg-white p-5 shadow-sm lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  My Subjects
                </h2>

                <Link
                  href="/student/subjects"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b text-gray-500">
                      <th className="px-3 py-3">Subject</th>

                      <th className="px-3 py-3">Credit Hour</th>
                    </tr>
                  </thead>

                  <tbody>
                    {subjects.map((subject) => (
                      <tr
                        key={subject.name}
                        className="border-b last:border-none"
                      >
                        <td className="px-3 py-3 font-medium text-gray-700">
                          {subject.name}
                        </td>

                        <td className="px-3 py-3 text-gray-500">
                          {subject.creditHour}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ================= STUDENT INFO ================= */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <FaUser />
                </div>

                <h2 className="text-lg font-semibold">Student Information</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>

                  <p className="text-sm font-medium">{student.name}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>

                  <p className="text-sm font-medium break-all">
                    {student.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Roll Number</p>

                  <p className="text-sm font-medium">{student.rollNo}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Program</p>

                  <p className="text-sm font-medium">{student.program}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CONTENT ================= */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* ================= NOTICES ================= */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                  <FaBell />
                </div>

                <h2 className="text-lg font-semibold">Recent Notices</h2>
              </div>

              <div className="space-y-3">
                {notices.map((notice, index) => (
                  <div key={index} className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-700">{notice}</p>

                    <p className="mt-1 text-xs text-gray-400">
                      Recently posted
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SCHEDULE ================= */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3 text-green-600">
                  <FaCalendarAlt />
                </div>

                <h2 className="text-lg font-semibold">Today's Schedule</h2>
              </div>

              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.subject}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {item.subject}
                      </p>

                      <p className="text-xs text-gray-400">Class 12</p>
                    </div>

                    <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
