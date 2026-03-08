import { Icons } from "@/components/icons";
import type { ResumeBaseData } from "@/data/resume-types";

type SharedSiteFields = Pick<
  ResumeBaseData,
  | "name"
  | "initials"
  | "url"
  | "location"
  | "locationLink"
  | "avatarUrl"
  | "skills"
  | "contact"
  | "hackathons"
>;

export const sharedSiteData: SharedSiteFields = {
  name: "Alfred Lin",
  initials: "AL",
  url: "https://humbleguava.top",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taipei",
  avatarUrl: "/guava.jpg",
  skills: [
    { name: "Python" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Agent Eval" },
    { name: "Agentic Engineering" },
    { name: "Context Engineering" },
    { name: "AI Product" },
    { name: "System Thinking" },
  ],
  contact: {
    email: "humbleguava@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alfred-lin-uc0079/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/humbleguava",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:humbleguava@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  hackathons: [],
};
