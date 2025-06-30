import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AI Voice Medical Assistant",
    description:
      "Real-Time AI Medical Voice Agent is a full-stack AI SaaS project built with Next.js, React, TypeScript, AssemblyAI, Clerk, and Neon DB. It enables users to interact with a virtual doctor using real-time voice input, offering symptom understanding and AI-powered responses. The app features speech-to-text, secure authentication, and cloud-based storage, making it ideal for modern healthcare AI solutions. Perfect for learning how to build and deploy real-time AI voice apps in the medical domain.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Vapi AI",
      "Google Gemini",
      "Clerk",
      "Neon DB",
      "Tailwind CSS",
      'Vercel'
    ],
    githubLink: "https://github.com/abhi01820/AI_Voice_Medical_Agent",
    demoLink: "https://ai-voice-medical-agent-y2na.vercel.app",
    image: "/projects/project4.jpg",
  },
  {
    title: "AI Voice Mock Interview",
    description:
      "AI Voice Mock Interview is a smart interview simulation tool that uses voice AI and Google Gemini to conduct realistic mock interviews. It offers real-time feedback, personalized insights, and detailed transcripts, helping users improve communication, confidence, and job-readiness through an engaging and responsive modern interface.",
    technologies: [
      "Next.js",
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "TypeScript",
      "Vapi AI",
      "Shadcn UI ",
      "Google Gemini",
      "Zod",
      'Vercel'
    ],
    githubLink: "https://github.com/abhi01820/AI_Voice_Mock_Interview",
    demoLink: "https://ai-mock-interview-three-kappa.vercel.app",
    image: "/projects/project3.png",
  },
  {
    title: "✨BuddyChat | Fullstack Chat & Video Call",
    description:
      "A full-stack language exchange platform with real-time chat, video calls, emoji support,file support ,JWT authentication. Features include 32 UI themes, screen sharing, secure messaging, Friend Requests  . Built with Stream SDK, Zustand, and MongoDB, deployable on Vercel, Render, or Railway.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "TanStack (React Query)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream Video & Chat SDK",
      'Render'
    ],
    githubLink: "https://github.com/abhi01820/BuddyChat",
    demoLink: "https://buddychat-i9qy.onrender.com",
    image: "/projects/project2.png",
  },
  {
    title: "📚 Online Book Store [Ecommerce] ",
    description:
      "A full-stack MERN application where users can browse books, view descriptions, add to cart or favorites, place orders (payment not included yet), and sign up or log out. Admins can manage the book inventory and order list from a dedicated dashboard.",
    technologies: [
      "Reactjs",
      "MongoDB",
      "Tailwind CSS[vite]",
      " Express",
      "Node.js",
      'Render'
    ],
    githubLink: "https://github.com/abhi01820/ONLINE-BOOKSTORE",
    demoLink: "https://online-bookstore-vblc.onrender.com/",
    image: "/projects/project1.png",
  },
];
