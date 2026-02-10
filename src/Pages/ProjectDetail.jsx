import React, { useEffect } from "react";
import Button from "../utils/Button";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils/CreatePageUrl";
import crwn from "../Assets/crwnn2.png";
import crwn2 from "../Assets/crwn2.png";
import crwn3 from "../Assets/crwn3.png";
import crwn4 from "../Assets/crwn4.png";
import zinter1 from "../Assets/zinter1.png";
import zinter2 from "../Assets/zinter2.png";
import zinter4 from "../Assets/zinter4.png";
import zinter3 from "../Assets/zinter3.png";
import auto1 from "../Assets/auto1.png";
import auto2 from "../Assets/auto2.png";
import auto3 from "../Assets/auto3.png";
import auto4 from "../Assets/auto4.png";
import soultunes1 from "../Assets/soultunes1.png";
import soultunes2 from "../Assets/soultunes2.png";
import soultunes3 from "../Assets/soultunes3.png";
import soultunes4 from "../Assets/soultunes4.png";

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.pathname.split("/")[1];

  console.log(location);

  // Project data - in a real app this would come from a database
  const projects = {
    "crwn-clothn": {
      id: "crwn-clothn",
      title: "Crwn Clothn",
      client: "Personal",
      category: "E-Commerce",
      year: "2024",
      role: "Frontend Developer",
      heroImage: crwn,
      images: [crwn2, crwn3, crwn4],
      description:
        "A next-generation e-commerce application designed to redefine online shopping for the modern consumer. Built with React and engineered for a fast, intuitive, and seamless shopping experience across all devices.",
      challenge:
        "The main challenge was building a shopping experience that felt both effortless and trustworthy. Users needed confidence in the platform’s security while enjoying a smooth, intuitive interface that made browsing, purchasing, and managing orders feel simple and enjoyable.",
      solution:
        "I developed a modular, component-based architecture using React and JavaScript, supported by a custom design system that ensured consistency across every shopping touchpoint. The interface was optimized for clarity and speed, with real-time product updates, smooth transitions, and intuitive navigation that guide users effortlessly from discovery to checkout.",
      technologies: ["React", "JavaScript", "Redux", "Firebase", "Stripe"],
      features: [
        "Responsive design for mobile and desktop",
        "Shopping cart management",
        "Stripe payment option",
        "Smooth and secure checkout flow",
        "Authentication System with both Google signin and email signin",
        "Contact Us and Support",
      ],
      results: [
        "Improved user engagement and shopping experience",
        "Received positive feedback from beta testers",
        "Reduced friction in the checkout process",
        "Implemented features that enhanced product discovery",
        "Demonstrated ability to design and build a full-featured e-commerce app",
      ],
      link: "https://dabsia-crwn-clothn.netlify.app/shop",
      nextProject: {
        id: "zinter",
        title: "Zinter",
      },
    },
    zinter: {
      id: "zinter",
      title: "Zinter",
      client: "Zinter",
      category: "Logistics & Transportation",
      year: "2025",
      role: "Lead Frontend Developer",
      heroImage: zinter1,
      images: [zinter4, zinter3, zinter2],
      description:
        "A digital platform for a trusted Dutch moving and logistics company. The website helps users easily schedule local and international moves, track shipments in real time, and explore services through a clean, intuitive, and interactive interface designed for the Netherlands market.",
      challenge:
        "The challenge was to create a digital platform that conveys the company’s reliability and professionalism while ensuring fast performance, intuitive navigation, and accessibility for users across the Netherlands. Customers needed a seamless way to schedule moves, get quotes, and track their shipments with confidence.",
      solution:
        "We developed a fast, intuitive web platform using React.js, featuring interactive maps that allow users to verify their current and new addresses. AI-assisted item scanning lets users quickly list belongings for the move, with the option to manually select items as well. The platform also supports real-time move tracking, detailed reporting, and secure payments through Stripe, creating a seamless end-to-end moving experience.",
      technologies: [
        "React.js",
        "AI",
        "Tailwind CSS",
        "Custom CSS",
        "Google Maps",
        "Redux",
        "API Integration",
        "Stripe Payments",
      ],
      features: [
        "Interactive route and address verification maps",
        "AI-assisted item scanning for move planning",
        "Manual item selection for custom moves",
        "Real-time move tracking dashboard",
        "Secure online payments via Stripe",
        "Automated move reports and summaries",
        "Smooth scroll-based animations for a polished UX",
        "Responsive design optimized for all devices",
        "Performance-optimized media loading",
        "CMS integration for easy service updates",
      ],
      results: [
        "Streamlined the moving process for customers, reducing planning time",
        "Enabled accurate move estimates with AI-assisted item scanning",
        "Improved customer confidence with real-time tracking",
        "Facilitated secure online payments, increasing completed bookings",
        "Received positive feedback from users for ease of use and clarity",
        "Enhanced operational efficiency by digitizing reporting and move management",
      ],
      link: "https://zinter.nl",
      nextProject: {
        id: "auto-spa-club",
        title: "Car Wash Business",
      },
    },
    "auto-spa-club": {
      id: "auto-spa-club",
      title: "Car Wash Business",
      client: "Auto Spa Club",
      category: "Automotive / Car Services",
      year: "2025",
      role: "Fullstack Developer",
      heroImage: auto1,
      images: [auto2, auto3, auto4],
      description:
        "A modern car wash app that makes keeping your vehicle clean effortless. Users can schedule one-time or recurring washes, choose from a variety of service options, and manage monthly subscriptions for unlimited convenience and secure payments ensure a seamless and reliable experience, all from the convenience of a smartphone.",
      challenge:
        "The challenge was to build a digital platform that makes booking and managing car cleaning services simple, reliable, and convenient. Users needed an easy way to schedule appointments, choose service types, and track service status, while also offering flexible subscription plans for recurring car washes.",
      solution:
        "I developed a mobile friendly web application. With a clean, intuitive interface and seamless scheduling flow, customers can effortlessly manage their car wash needs while the business can efficiently handle appointments and recurring subscriptions.",
      technologies: [
        "React JS",
        "Node Js",
        "Express Js",
        "Mongo DB",
        "Stripe",
        "Tailwind CSS",
      ],
      features: [
        "Schedule one-time or recurring car washes",
        "Manage monthly subscription plans for unlimited washes",
        "Select from a variety of service options",
        "Secure in-app payments and checkout",
        "Customers can create reviews and provide feedback",
        "User-friendly interface for quick booking",
        "Appointment history and service tracking",
        "Ratings and feedback for completed services",
      ],
      results: [
        "Streamlined the booking process, reducing scheduling time for customers",
        "Increased customer retention through monthly subscription plans",
        "Enabled real-time service tracking, improving customer satisfaction",
        "Facilitated secure payments, boosting completed bookings",
        "Empowered customers to leave reviews, enhancing trust and feedback collection",
        "Improved operational efficiency for managing appointments and recurring services",
      ],
      link: "https://auto-spa-club.vercel.app/",
      nextProject: {
        id: "soultunes",
        title: "Soultunes",
      },
    },
    soultunes: {
      title: "Soultunes",
      client: "Personal",
      category: "Entertainment",
      year: "2023",
      role: "Frontend Developer",
      heroImage: soultunes1,
      images: [soultunes2, soultunes3, soultunes4],
      description:
        "A personal music streaming and downloading web app designed to provide a seamless listening experience. Users can stream their favorite tracks, download music for offline listening, and organize playlists in an intuitive, user-friendly interface.",
      challenge:
        "The main challenge was building a fast, responsive platform that could handle music streaming and downloading efficiently while maintaining a simple and enjoyable user experience. Managing large audio files, ensuring smooth playback, and providing offline access were key technical hurdles.",
      solution:
        "I developed a web app using modern web technologies that supports real-time streaming, track downloads fetched from a API.The platform includes a clean interface, smooth navigation, and performance optimizations to ensure fast loading and seamless playback.",
      technologies: ["React", "Firebase", "Custom CSS", "REST API"],
      features: [
        "Stream music directly from the web app",
        "Download tracks for offline listening",
        "Search and filter songs by artist, album, or genre",
        "Responsive design for desktop and mobile devices",
        "Smooth playback with minimal buffering",
        "User-friendly interface with intuitive navigation",
        "Request songs to be added to the library",
      ],
      results: [
        "Personalized music library easily accessible from any device",
        "Offline listening enabled, providing flexibility and convenience",
        "Improved music organization with playlists and search functionality",
        "Enhanced technical skills in building media streaming and download features",
        "Demonstrated ability to handle performance optimization for large media files",
      ],
      link: "https://auto-spa-club.vercel.app/",
      nextProject: {
        id: "crwn-clothn",
        title: "Crwn Clothn",
      },
    },
  };

  const project = projects[projectId];

  console.log(projects);

  console.log(project, projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project not found</h1>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
          <Link
            to={createPageUrl("")}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          {/* <Link
            to={"/#contact"}
            variant="ghost"
            className="text-sm w-fit flex items-center mx-0 hover:bg-transparent"
          >
            Contact <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-10 md:pb-20 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-fadeInUp">
            <p className="text-sm text-gray-500 mb-4">{project.client}</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Meta */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <p className="text-sm text-gray-500 mb-2">Category</p>
              <p className="font-light">{project.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Year</p>
              <p className="font-light">{project.year}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Role</p>
              <p className="font-light">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Link</p>
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                className="font-light flex items-center hover:text-gray-600 transition-colors"
              >
                View Live <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section
        className="px-8 md:px-16 md-32 animate-fadeInScale"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <img
            src={project.heroImage}
            alt='"My Project — interactive portfolio demo"'
            className="w-full aspect-[16/10] object-contain rounded-2xl"
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="md:py-20 py-10 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="fade-in-on-scroll">
            <h2 className="text-3xl font-light mb-6">The Challenge</h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>

          <div className="fade-in-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-light mb-6">The Solution</h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="md:py-20 py-10 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`fade-in-on-scroll ${
                index === 2 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`alt="My Project — interactive portfolio demo"`}
                className="w-full aspect-video object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="md:py-20 py-10 px-8 md:px-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="fade-in-on-scroll">
            <h2 className="text-3xl font-light mb-8">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm font-light border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-in-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-light mb-8">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-600 font-light flex items-start"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="md:py-20 py-10 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="fade-in-on-scroll">
            <h2 className="text-3xl font-light mb-12">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="md:py-20 py-10 px-8 md:px-16 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center fade-in-on-scroll">
            <p className="text-sm text-gray-500 mb-4">Next Project</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              {project.nextProject.title}
            </h2>
            <Link to={`${createPageUrl("")}${project.nextProject.id}`}>
              <Button className="bg-black mx-auto hover:bg-gray-800 text-white rounded-full px-8 h-12">
                View Project
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs text-gray-500">
            © 2025 Dabo Johnson. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        .animate-fadeInScale {
          animation: fadeInScale 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        .fade-in-on-scroll {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
