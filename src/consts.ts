import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "ADHD with Nikki",
  EMAIL: "adhdwithnikki@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "ADHD with Nikki is a space for all to explore neurodivergence.",
};

export const POSTS: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of personal experiences, research, management strategies, art, and more.",
};

export const PROJECTS: Metadata = {
  TITLE: "Resources",
  DESCRIPTION: "A collection of resources meant to support those with ADHD or supporting people with ADHD.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/nikkicoll"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/nikkicoll",
  }
];
