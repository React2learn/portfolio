"use client";
import TopBar from "@/components/TopNavbar";
import { Mail, Phone, Linkedin, Github, MapPin, Calendar } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      title: "Email",
      content: "atharvayengde13@gmail.com",
      icon: Mail,
      color: "dark:from-blue-500 dark:to-cyan-500",
      description: "Drop me a line anytime",
    },
    {
      title: "Phone",
      content: "+91 9767904963",
      icon: Phone,
      color: "dark:from-green-500 dark:to-emerald-500",
      description: "Available 9 AM - 6 PM IST",
    },
    {
      title: "LinkedIn",
      content: "linkedin.com/in/atharvayengde/",
      icon: Linkedin,
      color: "dark:from-blue-600 dark:to-indigo-600",
      description: "Let's connect professionally",
    },
    {
      title: "GitHub",
      content: "github.com/React2learn",
      icon: Github,
      color: "dark:from-gray-600 dark:to-gray-800",
      description: "Check out my code",
    },
    {
      title: "Location",
      content: "Mumbai, Maharashtra, IN",
      icon: MapPin,
      color: "dark:from-purple-500 dark:to-pink-500",
      description: "Available for local meetups",
    },
    {
      title: "Schedule",
      content: "Book a 30min call",
      icon: Calendar,
      color: "dark:from-orange-500 dark:to-red-500",
      description: "Let's discuss your project",
    },
  ];

  return (
    <>
      <TopBar />
      <div className="relative py-12 px-4 font-karla">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-left sm:text-center text-3xl md:text-5xl font-bold 
                         dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-400 
                         dark:bg-clip-text dark:text-transparent text-gray-900">
            Let&apos;s Connect
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-left sm:text-center text-lg 
                        text-gray-700 dark:text-gray-300">
            I&apos;d love to hear from you! Whether it&apos;s a project idea, collaboration,
            or just a quick hello — here are the best ways to reach me.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {contacts.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="
                  rounded-xl p-6 text-center transition-transform hover:-translate-y-1
                  bg-white/80 border border-gray-200 shadow
                  dark:bg-slate-900/70 dark:border-slate-800 dark:shadow-lg dark:hover:shadow-purple-500/10
                "
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full dark:bg-gradient-to-br ${item.color} flex items-center justify-center bg-gray-200`}
                >
                  <IconComponent className="w-6 h-6 text-gray-800 dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="font-karla mt-1 break-words text-gray-700 dark:text-gray-300">
                  {item.content}
                </p>
                <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
