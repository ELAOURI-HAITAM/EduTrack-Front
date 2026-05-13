import React from "react";
import about from "../../assets/about.png";
import { Link } from "react-router-dom";
import MainButton from "../../components/Buttons/main_button";
import { Shield } from "lucide-react";

const About = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800"
      id="about"
      className="transition-all ease-in-out bg-linaer-to-br from-blue-50 to-purple-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="flex h-96 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 shadow-2xl">
              <img src={about} width={470} />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              About <span className="text-blue-600">EduTrack</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              At EduTrack, our mission is to redefine academic productivity. We
              believe that university learning shouldn't be about scrolling
              through cluttered management systems, but about achieving focused,
              actionable goals. We built this platform to bridge the gap between
              traditional education and modern time management.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Through our subscription-based feed, auto-assigned study tasks,
              and dynamic productivity tracking, students can visualize their
              daily progress and identify challenging modules. Simultaneously,
              faculty members get a dedicated dashboard to trigger smart
              notifications and gather valuable insights on student engagement.
              Together, we are building a smarter way to teach and learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
