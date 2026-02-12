import { useState, useEffect } from "react";
import Button from "../utils/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectShowcase from "../components/ProjectShowcase";
import ServiceCard from "../components/ServiceCard";
import crwn from "../Assets/crwn3.png";
import zinter from "../Assets/zinter.png";
import auto from "../Assets/auto1.png";
import soultunes1 from "../Assets/soultunes1.png";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Crwn Clothn",
      client: "Personal",
      category: "E-Commerce",
      image: crwn,
      color: "bg-slate-50",
    },
    {
      title: "Zinter",
      client: "Zinter",
      category: "Logistics annd Transportation",
      image: zinter,
      color: "bg-purple-50",
    },
    {
      title: "Auto Spa Club",
      client: "Auto Spa Club",
      category: "Automotive / Car Services",
      image: auto,
      color: "bg-blue-50",
    },
    {
      title: "Soultunes",
      client: "Personal",
      category: "Entertainment",
      image: soultunes1,
      color: "bg-emerald-50",
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue Js",
        "Responsive Design",
        "Performance Optimization",
        "Redux and Zustand",
        "Figma",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
    {
      title: "Mobile Development",
      items: [
        "Cross-Platform Mobile Development with React Native",
        "Component Styling & Layouts",
        "REST API Integration & State Management",
        "Performance Optimization & Debugging",
      ],
    },
    {
      title: "Other Tools in my Belt",
      items: [
        "Python",
        "Node Js, Express Js And MongoDB",
        "Firebase, Clerk, Supabase",
        "Docker",
        "Git and Github",
        "REST API Integration",
        "State Management",
        "NPM, YARN, WEBPACK, BABEL",
        "Testing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-light tracking-tight"
          >
            Dabo Johnson
          </motion.div>

          <div className="hidden md:flex items-center gap-12">
            <a
              href="#work"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#services"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a href="#contact">
              <Button
                variant="ghost"
                className="text-sm px-0 cursor-pointer hover:bg-transparent"
              >
                Contact <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center px-8 md:px-16 pt-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">
              Frontend Development · UI Engineering
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-12 tracking-tight">
              Crafting exceptional
              <br />
              <span className="font-light italic">digital experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming design visions into pixel-perfect, high-performance
              web applications that users love to interact with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-10 md:py-20 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectShowcase key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-10 md:py-20 px-8 md:px-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">
              Crafting Success
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              See how I've turned{" "}
              <span className="italic">design concepts</span> into reality.
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Dive into the stories of successful web applications that combine
              beautiful interfaces with seamless functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:20 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">
              Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 md:px-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-1 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-8">
                My Story
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Building bridges between design and technology
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                With over 3 years of professional experience in frontend
                development, I specialize in bringing design visions to life
                through clean, maintainable code and thoughtful engineering.
              </p>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                I believe that great interfaces are born from the perfect
                marriage of aesthetics and functionality. My mission is to
                create web experiences that are not only beautiful but also
                intuitive and performant.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              Let's create something
              <br />
              <span className="italic">exceptional together</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-light">
              Ready to bring your project to life? Let's talk.
            </p>
            <div className="flex w-full justify-center">
              <a
                href="mailto:dabojohnson98@gmail.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-12 h-14 text-base">
                  Get In Touch
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-gray-200 py-12 px-8 md:px-16"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-2xl font-light mb-2">Dabo Johnson</div>
              <p className="text-sm text-gray-500">
                Frontend Developer · UI Engineer
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <a
                href="https://www.linkedin.com/in/daboikiabo-johnson-5b39a8211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/dabsia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Github
              </a>

              <a
                href="https://x.com/johnson_dabo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="mailto:dabojohnson98@gmail.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              © 2025 Dabo Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
