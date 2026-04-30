import React from "react";
import {
  Users,
  Shield,
  Zap,

} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Curated Learning Feed",
      description: "Follow specific professors and have newly uploaded academic resources auto-assigned directly to your personal To-Do list"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exclusive Ecosystem",
      description: " A secure, distraction-free platform strictly limited to officially enrolled university students and faculty members."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interactive Progress Tracking",
      description: " Log your actual study sessions, validate task difficulty, and visualize your academic performance through dynamic statistics."
    }
  ];

  return (
    <section data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="800"
        id="features"
        className="transition-all ease-in-out  py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose EduTrack?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Discover the features designed to elevate your academic productivity and streamline your study workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
