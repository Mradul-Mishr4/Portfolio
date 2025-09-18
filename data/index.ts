export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Client-Focused Development with Clear Communication",
    description:
      "I prioritize understanding your business needs and maintaining transparent communication throughout the development process.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to Learning & Collaboration",
    description:
      "Eager to learn from experienced developers and contribute fresh perspectives to challenging projects.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Modern Tech Stack Enthusiast",
    description:
      "Currently mastering React, Next.js, Node.js, and exploring the latest web technologies through academic and personal projects.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Fresh Ideas & Strong Fundamentals",
    description:
      "Combining solid computer science fundamentals with enthusiasm for creating innovative, user-friendly web applications.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building Academic & Personal Projects",
    description:
      "Actively developing projects to strengthen skills and create an impressive portfolio for career opportunities",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready for Internships & Entry-Level Opportunities",
    description:
      "Seeking opportunities to apply my skills in real-world projects and grow as a developer.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    des: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for optimal user experience.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "#", // Replace with your actual project link or GitHub repo
  },
  {
    id: 2,
    title: "Chat Application",
    des: "A real-time chat application with features like instant messaging, user authentication, and responsive design. Implemented using WebSocket for seamless communication.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#", // Replace with your actual project link or GitHub repo
  },
  {
    id: 3,
    title: "Resume Analyser",
    des: "An intelligent resume analysis tool that provides insights and suggestions for improvement. Features AI-powered keyword analysis and scoring system.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#", // Replace with your actual project link or GitHub repo
  },
  {
    id: 4,
    title: "Weather Dashboard Application",
    des: "A dynamic weather application that fetches real-time data from APIs and displays beautiful weather visualizations with location-based forecasts.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "GitHub",
    url: "https://github.com/mradulmishra", // Update with your actual GitHub username
  },
  {
    id: 2,
    img: "/link.svg",
    name: "LinkedIn",
    url: "https://linkedin.com/in/mradulmishra", // Update with your actual LinkedIn profile
  },
  {
    id: 3,
    img: "/twit.svg",
    name: "Twitter",
    url: "https://twitter.com/mradulmishra", // Update with your actual Twitter handle
  },
];

// Contact Information
export const contactInfo = {
  name: "Mradul Mishra",
  title: "Final Year B.Tech Student • Aspiring Full Stack Developer",
  location: "India",
  email: "mmradul203@gmail.com",
  phone: "+91 89576 57052",
  github: "https://github.com/mradulmishra",
  linkedin: "https://linkedin.com/in/mradulmishra",
  twitter: "https://twitter.com/mradulmishra",
  projects: {
    ecommerce:
      "E-Commerce Platform - Full-stack solution with payment integration",
    chat: "Chat Application - Real-time messaging with WebSocket",
    resume: "Resume Analyser - AI-powered resume analysis tool",
  },
};
