import React from "react";
import img from "../assets/blog/img-1.jpeg";
import { IoCalendarOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa6";
import imgg from "../assets/blog/img-2.jpeg"
import img2 from "../assets/blog/img-3.jpeg"

const blogPosts = [
  {
    image: img,
    title: "Visiting Coastal Paradise: The HostWise Experience",
    date: "14/05/2026",
    author: "HostWise Editorial",
    comments: "3 Comments",
    excerpt: "Discover the breathtaking beauty of seaside living at HostWise. From sunrise ocean views to private beach access and exquisite dining, immerse yourself in true relaxation.",
  },
  {
    image: imgg,
    title: "Culinary Excellence: Savoring Fine Dining at HostWise",
    date: "28/04/2026",
    author: "Executive Chef",
    comments: "5 Comments",
    excerpt: "Explore the artistry behind our seasonal tasting menus. Our culinary team sources the freshest coastal ingredients to craft an unforgettable dining adventure for every guest.",
  },
  {
    image: img2,
    title: "Holistic Wellness: Spa & Rejuvenation Rituals",
    date: "10/04/2026",
    author: "Wellness Team",
    comments: "2 Comments",
    excerpt: "Unwind with our signature therapeutic treatments designed to restore balance and vitality. Learn how our bespoke wellness retreats provide an oasis of calm.",
  }
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-cyan-700 font-bold">
          Stories & Insights
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          HostWise Journal
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Read travel guides, culinary features, and hospitality stories from HostWise.
        </p>
      </div>

      <div className="space-y-16">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
            <div className="w-full max-h-[460px] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition duration-500" 
              />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 hover:text-cyan-700 transition">
                {post.title}
              </h2>
              <ul className="flex flex-wrap gap-5 mt-4 text-stone-500 text-sm">
                <li className="flex items-center gap-1.5">
                  <IoCalendarOutline className="text-cyan-600 text-lg" />
                  {post.date}
                </li>
                <li className="flex items-center gap-1.5">
                  <RiAdminLine className="text-cyan-600 text-lg" />
                  {post.author}
                </li>
                <li className="flex items-center gap-1.5">
                  <FaRegCommentDots className="text-cyan-600 text-lg" />
                  {post.comments}
                </li>
              </ul>
              <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                {post.excerpt}
              </p>
              <div className="mt-6">
                <button className="bg-cyan-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-cyan-800 transition shadow">
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
