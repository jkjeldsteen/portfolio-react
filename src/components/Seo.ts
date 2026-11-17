import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeo } from "../seo";

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    const meta = (attribute: "name" | "property", key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = value;
    };
    meta("name", "description", seo.description);
    meta("name", "robots", seo.robots);
    for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, url: seo.url, image: seo.image })) {
      meta("property", `og:${key}`, value);
    }
    for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, image: seo.image })) {
      meta("name", `twitter:${key}`, value);
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seo.url;
  }, [pathname]);

  return null;
}
