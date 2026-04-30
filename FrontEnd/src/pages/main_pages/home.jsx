import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import Welcom from "../../assets/home_logo.png";
import MainButton from "../../components/Buttons/main_button";
import About from "./about";
import FeaturesSection from "./features";
const Home = () => {
  return (
    <>
      <Navbar />
      <section
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="800"
        id="home"
        className="flex min-h-screen items-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16 transition-all ease-in-out"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    EduTrack
                  </span>
                </h1>
                <p className="text-xl leading-relaxed text-gray-600">
                  Your exclusive platform for bridging the
                  gap between traditional learning and academic productivity.
                  Whether you are a student turning course materials into
                  actionable goals, or a professor sharing resources and
                  tracking student engagement, our system is designed to
                  streamline your educational workflow and help you focus on
                  what matters most: your academic success.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/user/signup">
                  <MainButton className="group">Get Started</MainButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="flex h-96 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl">
                  <img src={Welcom} width={470} />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 h-96 w-full rounded-2xl bg-gradient-to-br from-blue-300 to-purple-400 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <About />
      <Footer />
    </>
  );
};

export default Home;
