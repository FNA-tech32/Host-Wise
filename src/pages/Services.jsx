import React from 'react';
import { PiFlowerLotus } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { BsSuitcaseLg } from "react-icons/bs";
import { LiaSwimmerSolid } from "react-icons/lia";
import { MdFitnessCenter, MdAirportShuttle, MdRoomService, MdWifi } from "react-icons/md";
import spa1 from "../assets/images/spa1.jpeg";
import spa2 from "../assets/images/spa2.jpeg";

const servicesList = [
  {
    icon: <PiFlowerLotus className="text-emerald-500 text-4xl" />,
    title: "Spa & Wellness",
    schedule: "Open Daily: 8:00 AM - 10:00 PM",
    description: "Rejuvenate your body and mind with organic treatments, therapeutic massages, and holistic wellness sessions."
  },
  {
    icon: <ImSpoonKnife className="text-amber-500 text-4xl" />,
    title: "Fine Dining & Lounge",
    schedule: "Breakfast, Lunch & Dinner",
    description: "Experience gourmet culinary journeys prepared by executive chefs featuring fresh, locally sourced coastal ingredients."
  },
  {
    icon: <BsSuitcaseLg className="text-cyan-600 text-4xl" />,
    title: "Luxury Suites & Rooms",
    schedule: "Panoramic Ocean Views",
    description: "Elegant interiors with premium bedding, modern architecture, and scenic balconies crafted for optimal relaxation."
  },
  {
    icon: <LiaSwimmerSolid className="text-sky-500 text-4xl" />,
    title: "Infinity Pool & Cabanas",
    schedule: "Open Daily: 6:00 AM - 9:00 PM",
    description: "Bask in the sun by our climate-controlled outdoor swimming pool with private poolside cabana service."
  },
  {
    icon: <MdFitnessCenter className="text-purple-500 text-4xl" />,
    title: "Modern Fitness Center",
    schedule: "24/7 Access for Guests",
    description: "Stay active during your travels with modern cardio machines, free weights, yoga mats, and personal trainers."
  },
  {
    icon: <MdAirportShuttle className="text-blue-500 text-4xl" />,
    title: "Airport Transfer & Valet",
    schedule: "Available Upon Request",
    description: "Effortless travel with our private chauffeur service, airport pickups, and round-the-clock secure valet parking."
  },
  {
    icon: <MdRoomService className="text-rose-500 text-4xl" />,
    title: "24/7 In-Room Dining",
    schedule: "Round-the-clock Service",
    description: "Enjoy hot, delectable meals and specialty cocktails delivered straight to your room anytime of day or night."
  },
  {
    icon: <MdWifi className="text-indigo-500 text-4xl" />,
    title: "High-Speed Wi-Fi & Lounge",
    schedule: "Complimentary Throughout Property",
    description: "High-speed fiber connectivity and quiet workspaces designed for digital nomads and business travelers."
  }
];

const Services = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-cyan-700 font-semibold tracking-wider uppercase text-sm">
          HostWise Hospitality
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          World-Class Services & Amenities
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          At HostWise, every detail is meticulously tailored to ensure your stay exceeds all expectations with seamless comfort, luxury, and care.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-gray-50 rounded-xl w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-cyan-700 mt-1 mb-3">
                {service.schedule}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Showcase */}
      <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 space-y-4">
          <span className="text-cyan-700 font-bold uppercase text-xs tracking-wider">
            Unrivaled Hospitality
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Immerse Yourself in the HostWise Experience
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            From arrival to departure, our dedicated concierge team is at your beck and call. Whether you require private yacht charters, reservations at Michelin-starred restaurants, or an in-suite spa ritual, HostWise makes it effortless.
          </p>
          <div className="pt-2">
            <p className="text-xs text-gray-500 font-medium">
              Need assistance? Reach our 24/7 Concierge desk:
            </p>
            <p className="text-sm font-semibold text-cyan-800">
              Primary: +1 (800) 555-0199 | Alt: +1 (555) 234-5678
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex gap-4 w-full">
          <img
            src={spa1}
            alt="HostWise Spa"
            className="w-1/2 rounded-xl object-cover h-64 shadow-md"
          />
          <img
            src={spa2}
            alt="HostWise Wellness"
            className="w-1/2 rounded-xl object-cover h-64 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
