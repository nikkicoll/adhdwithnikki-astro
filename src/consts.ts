import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "ADHD With Nikki",
  EMAIL: "adhdwithnikki@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "ADHD With Nikki is a space for all to explore ADHD.",
};

export const BLOG: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of writings about ADHD--personal experiences, research, management strategies, and more.",
};

export const PROJECTS: Metadata = {
  TITLE: "Resources",
  DESCRIPTION: "A collection of resources meant to support those with ADHD.",
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
