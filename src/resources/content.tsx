import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Logic",
  lastName: "Mason",
  name: "Logic Mason",
  role: "AI & Fullstack Engineer",
  avatar: "/images/avatar.jpg",
  email: "logicmason5@gmail.com",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Japanese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on AI, full-stack engineering, and building intelligent products</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/LogicMason5",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "#", // TODO: add your LinkedIn profile URL
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "#", // TODO: add your Instagram profile URL
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@logicmason",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into intelligent digital solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ai-ml-integration-platform",
  },
  subline: (
    <>
    I'm Logic, an <Text as="span" size="xl" weight="strong">AI & Full-Stack Engineer</Text> building scalable web and mobile apps <br /> powered by AI and blockchain — taking products from idea to deployment for clients worldwide.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Logic is an Osaka-based AI & Full-Stack Engineer specializing in AI/ML integration. He builds
        scalable web and mobile applications — bringing together intelligent models, robust backends,
        and blockchain components to turn ideas into production-ready digital solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "Oct 2023 - Present",
        role: "Full-Stack / AI Engineer (Remote)",
        achievements: [
          "Provide comprehensive full-stack web and mobile solutions for global clients, incorporating AI models and blockchain components.",
          "Own the complete project lifecycle: from requirements gathering through architecture design to implementation, testing, and deployment.",
        ],
        images: [],
      },
      {
        company: "GDP Labs",
        timeframe: "Oct 2018 - Sep 2023",
        role: "Senior / Principal Full-Stack & AI Engineer",
        achievements: [
          "Led architecture and technical decisions as a Senior/Principal Full-Stack Engineer for large-scale web and mobile applications.",
          "Designed and delivered cross-platform mobile solutions integrated with scalable backend services and AI-driven features.",
          "Built high-performance APIs, modern frontend systems, and cloud-native infrastructure to ensure reliability, security, and seamless user experiences.",
          "Directed CI/CD, containerization, and deployment pipelines while mentoring engineers and driving technical roadmaps across teams.",
        ],
        images: [],
      },
      {
        company: "Cambridge Technology Partners",
        timeframe: "Oct 2017 - Sep 2018",
        role: "Full-Stack Developer (Intern)",
        achievements: [
          "Worked under senior engineers on web and back-end services, assisting in system integration and consulting projects.",
          "Gained hands-on experience in REST API development, database design, and full-stack web application workflows.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Tokyo Institute of Technology (Tokyo Tech)",
        description:
          "B.Eng. in Information Technology, specializing in Computer Science & Artificial Intelligence (2013 - 2017).",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI & Backend",
        description:
          "Designing AI-integrated backends and high-performance APIs across multiple runtimes.",
        tags: [
          { name: "Python", icon: "python" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Nest.js", icon: "nestjs" },
          { name: "Laravel", icon: "laravel" },
          { name: "Go", icon: "go" },
          { name: "Rust", icon: "rust" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frontend",
        description:
          "Building modern, responsive web interfaces with the React and Vue ecosystems.",
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Vue.js", icon: "vuejs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Mobile",
        description:
          "Delivering cross-platform mobile apps integrated with scalable backends.",
        tags: [
          { name: "React Native", icon: "react" },
          { name: "Flutter", icon: "flutter" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Data & DevOps",
        description:
          "Cloud-native infrastructure, containerization, and reliable data layers.",
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "GraphQL", icon: "graphql" },
          { name: "Docker", icon: "docker" },
          { name: "Java", icon: "java" },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
