import React, { useEffect } from "react";
import Button from "../utils/Button";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils/CreatePageUrl";

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.pathname.split("/")[1];

  console.log(location);

  // Project data - in a real app this would come from a database
  const projects = {
    "dello-banking": {
      id: "dello-banking",
      title: "Dello Banking App",
      client: "Booking Corp.",
      category: "Fintech",
      year: "2024",
      role: "Lead Frontend Developer",
      heroImage:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
      ],
      description:
        "A revolutionary fintech application that reimagines mobile banking for the modern user. Built with React Native and a focus on seamless user experience.",
      challenge:
        "The main challenge was creating a banking experience that felt both secure and approachable. Users needed confidence in the platform while enjoying a smooth, intuitive interface that made complex financial tasks feel simple.",
      solution:
        "We developed a component-based architecture using React and TypeScript, implementing a custom design system that ensured consistency across all touchpoints. The interface prioritizes clarity and speed, with real-time updates and smooth animations that guide users through their financial journey.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Framer Motion",
        "Tailwind CSS",
        "REST API",
      ],
      features: [
        "Real-time transaction monitoring",
        "Intuitive money transfer system",
        "Interactive spending analytics",
        "Biometric authentication",
        "Custom notification system",
        "Dark mode support",
      ],
      results: [
        "40% increase in user engagement",
        "95% positive user feedback",
        "50% reduction in support tickets",
        "Featured in Product Hunt",
      ],
      link: "https://dabsia-crwn-clothn.netlify.app/shop",
      nextProject: {
        id: "dazzle-branding",
        title: "Dazzle Branding",
      },
    },
    "dazzle-branding": {
      id: "dazzle-branding",
      title: "Dazzle © Branding",
      client: "Dazzle Inc.",
      category: "Branding",
      year: "2024",
      role: "Frontend Developer & UI Engineer",
      heroImage:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1400&q=80",
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=80",
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&q=80",
      ],
      description:
        "A complete digital branding experience for a bold new creative agency. The website showcases their portfolio with stunning animations and interactive elements.",
      challenge:
        "Create a digital presence that captures Dazzle's bold, creative spirit while maintaining fast performance and accessibility standards.",
      solution:
        "Implemented a cutting-edge web experience using Next.js with advanced animation libraries. Created custom SVG animations and WebGL effects that respond to user interactions, all while maintaining a Lighthouse score above 95.",
      technologies: [
        "Next.js",
        "Three.js",
        "GSAP",
        "Styled Components",
        "WebGL",
        "Contentful CMS",
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
      link: "#",
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
        id: "dello-banking",
        title: "Dello Banking App",
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
            Back to Portfolio
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
            Back to Portfolio
          </Link>

          <div className="text-2xl font-light tracking-tight">Dabo Johnson</div>

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
            <Link to={`${createPageUrl("/")}?id=${project.nextProject.id}`}>
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 h-12">
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
