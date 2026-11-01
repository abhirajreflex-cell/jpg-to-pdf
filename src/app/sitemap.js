import { SITE_URL } from "@/lib/config";
import { tools } from "@/lib/tools";

export default function sitemap() {
  const homePage = {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  };

  const toolPages = tools
    .filter((tool) => tool.live)
    .map((tool) => ({
      url: `${SITE_URL}/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [homePage, ...toolPages];
}