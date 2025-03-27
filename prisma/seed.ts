import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Socially",
        description:
          "Full-stack social media platform with authentication, real-time updates, and responsive design.",
        image: "/images/socially.png",
        category: "next.js",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Clerk",
          "Neon DB",
          "Prisma",
        ],
        liveUrl: "https://socially-lemon-six.vercel.app/",
        githubUrl: "https://github.com/qasimjd/Socially-",
        detailedDescription:
          "Socially is a modern social media platform built with Next.js and powered by Clerk authentication. Users can create profiles, share posts, engage with content through likes and comments, and follow other users. The platform features a responsive design that works seamlessly across desktop and mobile devices. Data is stored in a Neon SQL database with Prisma as the ORM for efficient data management.",
        features: [
          "User authentication and profile management",
          "Post creation with rich media support",
          "Real-time notifications and updates",
          "Responsive UI for all devices",
          "Follow system with personalized feeds",
          "Dark/light theme support",
        ],
      },
      {
        title: "BookWise",
        description: "A University Library Management System.",
        image: "/images/blog-cms.jpg",
        category: "next.js",
        technologies: [
          "Next.js",
          "React Query",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "NextAuth.js",
        ],
        liveUrl: "https://qasimjd.tech",
        githubUrl: "https://github.com/qasimjd/-university-library",
        detailedDescription:
          "DevBlog CMS is a specialized content management system designed for developers sharing technical content. It features a distraction-free markdown editor, code syntax highlighting, and built-in SEO tools. The system includes a comprehensive dashboard for content management and analytics. Built with Next.js for performance and SEO benefits, it uses PostgreSQL with Prisma for data management and NextAuth.js for secure authentication.",
        features: [
          "Distraction-free markdown editor with live preview",
          "Code syntax highlighting with multiple themes",
          "Role-based access control for teams",
          "Automated SEO optimization suggestions",
          "Content scheduling and versioning",
          "Integrated analytics dashboard",
        ],
      },
    ],
  });

  console.log("Projects added to database!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
