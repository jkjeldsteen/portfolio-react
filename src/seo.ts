export const SITE_URL = "https://jkjeldsteen.com";

export const pages: Record<string, { title: string; description: string; image?: string }> = {
  "/": {
    title: "Jakob Kjeldsteen | Software Developer",
    description: "Explore Jakob Kjeldsteen's software development portfolio: backend services, industrial integrations, digital twins, Unity games, and development logs.",
  },
  "/work": {
    title: "Software Projects & Professional Work | Jakob Kjeldsteen",
    description: "Explore Jakob Kjeldsteen's professional and personal projects in industrial simulation, backend services, integrations, and game development.",
  },
  "/about": {
    title: "About Jakob Kjeldsteen | Software Developer",
    description: "Learn about Jakob Kjeldsteen's experience in industrial software, backend development, and Unity games, his education, and download his résumé.",
  },
  "/skills": {
    title: "Software Development Skills | Jakob Kjeldsteen",
    description: "Explore Jakob Kjeldsteen's technical skills across backend and frontend development, databases, C#, Unity, Go, React, and TypeScript.",
  },
  "/contact": {
    title: "Contact Jakob Kjeldsteen | Software Developer",
    description: "Contact Jakob Kjeldsteen to discuss software development opportunities, backend services, industrial integrations, or game development projects.",
  },
  "/games": {
    title: "Playable Browser Games | Jakob Kjeldsteen",
    description: "Play Jakob Kjeldsteen's Unity WebGL projects in your browser, including Bouncy Pirate, Gold Mine Defender, Warthog Defence, and Square Jumper.",
  },
  "/devlogs": {
    title: "Epoch Raiders Development Logs | Jakob Kjeldsteen",
    description: "Follow the development of Epoch Raiders, a Unity roguelike shooter, through notes on enemy AI, the Ice Age level, pixel art, and game feel.",
  },
  "/devlogs/0": {
    title: "Getting Started with Epoch Raiders | Devlog 0",
    description: "Read Jakob Kjeldsteen's first Epoch Raiders devlog about getting started on a Unity game and creating its first enemies.",
  },
  "/devlogs/1": {
    title: "Epoch Raiders: The Ice Age Level | Devlog 1",
    description: "Follow work on the first level of Epoch Raiders: the Ice Age, with cavemen, mammoths, and Unity game development progress.",
  },
  "/devlogs/2": {
    title: "Epoch Raiders: Game Feel & Art Strategy | Devlog 2",
    description: "Explore game feel improvements and pixel art strategy in Jakob Kjeldsteen's third development log for the Unity game Epoch Raiders.",
  },
};

for (const [id, title, description] of [
  ["bouncy-pirate", "Bouncy Pirate", "Play a pirate-themed platformer inspired by Doodle Jump, built as a personal project exploring platformer mechanics."],
  ["gold-mine-defender", "Gold Mine Defender", "Defend your mine by matching your defender's color to attackers in this browser game with custom artwork and sound effects."],
  ["warthog-defence", "Warthog Defence", "Defend your base with a catapult against waves of wild warthogs. Play Jakob Kjeldsteen's Warthog Defence in your browser."],
  ["square-jumper", "Square Jumper", "Jump across increasingly difficult obstacles in this Geometry Dash-inspired platformer. Play Square Jumper in your browser."],
]) {
  pages[`/games/play/${id}`] = {
    title: `Play ${title} | Jakob Kjeldsteen`, description,
    image: `/images/game-previews/${id}.png`,
  };
}

export function getSeo(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = pages[path];
  return {
    title: page?.title ?? "Page Not Found | Jakob Kjeldsteen",
    description: page?.description ?? "This page could not be found. Explore Jakob Kjeldsteen's software projects, games, and development logs.",
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    image: `${SITE_URL}${page?.image ?? "/images/jakob-kjeldsteen.jpg"}`,
    robots: page ? "index, follow" : "noindex, follow",
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Jakob Kjeldsteen",
  url: `${SITE_URL}/`,
  jobTitle: "Software Developer",
  image: `${SITE_URL}/images/jakob-kjeldsteen.jpg`,
  sameAs: ["https://github.com/jkjeldsteen", "https://www.linkedin.com/in/jkjeldsteen/", "https://jkjeldsteen.itch.io"],
};
