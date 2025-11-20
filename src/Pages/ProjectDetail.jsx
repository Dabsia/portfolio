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
        "A next-generation e-commerce application designed to redefine online shopping for the modern consumer. Built with React Native and engineered for a fast, intuitive, and seamless shopping experience across all devices.",
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
        "Interactive 3D logo animation",
        "Smooth scroll-based animations",
        "Dynamic portfolio grid",
        "Advanced cursor interactions",
        "Performance-optimized media loading",
        "Headless CMS integration",
      ],
      results: [
        "Won Awwwards Site of the Day",
        "100% Lighthouse performance score",
        "300% increase in client inquiries",
        "Featured on CSS Design Awards",
      ],
      link: "https://zinter.nl",
      nextProject: {
        id: "healthcare-app",
        title: "Healthcare Mobile App",
      },
    },
    "healthcare-app": {
      id: "healthcare-app",
      title: "Healthcare Mobile App",
      client: "CareSunset",
      category: "Healthcare",
      year: "2024",
      role: "Senior Frontend Developer",
      heroImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&q=80",
      ],
      description:
        "A comprehensive healthcare platform connecting patients with doctors through an intuitive mobile interface. Features telemedicine, appointment booking, and health tracking.",
      challenge:
        "Building a healthcare application that meets HIPAA compliance standards while providing a consumer-grade user experience.",
      solution:
        "Developed a secure, scalable React application with end-to-end encryption and robust state management. Implemented real-time video consultations and a sophisticated appointment system with smart scheduling algorithms.",
      technologies: [
        "React",
        "WebRTC",
        "Socket.io",
        "Redux",
        "Material-UI",
        "Node.js",
      ],
      features: [
        "HIPAA-compliant video consultations",
        "Smart appointment scheduling",
        "Electronic health records",
        "Prescription management",
        "Health metrics tracking",
        "Multi-language support",
      ],
      results: [
        "10,000+ active users in 3 months",
        "4.8/5 app store rating",
        "99.9% uptime maintained",
        "HIPAA certification achieved",
      ],
      link: "#",
      nextProject: {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
      },
    },
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      client: "Small Birdy",
      category: "Grocery Web App",
      year: "2023",
      role: "Full Stack Frontend Developer",
      heroImage:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
        "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&q=80",
      ],
      description:
        "A modern grocery shopping platform with real-time inventory management, personalized recommendations, and seamless checkout experience.",
      challenge:
        "Creating a fast, responsive shopping experience that handles thousands of products while providing personalized recommendations and managing complex cart logic.",
      solution:
        "Built a performant Progressive Web App using React with advanced caching strategies. Implemented virtual scrolling for product lists, optimistic UI updates, and a sophisticated recommendation engine integration.",
      technologies: [
        "React",
        "PWA",
        "GraphQL",
        "Apollo Client",
        "Stripe",
        "Service Workers",
      ],
      features: [
        "Smart product search",
        "Personalized recommendations",
        "One-click checkout",
        "Real-time inventory tracking",
        "Shopping list management",
        "Offline mode support",
      ],
      results: [
        "200% increase in conversion rate",
        "45% decrease in cart abandonment",
        "PWA installed by 30% of users",
        "Average load time under 2 seconds",
      ],
      link: "#",
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

          <div className="text-2xl cursor-pointer font-light tracking-tight">
            <Link to={"/"}>Dabo Johnson</Link>
          </div>

          <Button variant="ghost" className="text-sm px-0 hover:bg-transparent">
            Contact <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 md:px-16">
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
        className="px-8 md:px-16 mb-32 animate-fadeInScale"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-8 md:px-16">
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
      <section className="py-20 px-8 md:px-16">
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
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full aspect-video object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="py-20 px-8 md:px-16 bg-gray-50">
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
      <section className="py-20 px-8 md:px-16">
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
      <section className="py-32 px-8 md:px-16 border-t border-gray-200">
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
