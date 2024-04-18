import { MetadataRoute } from "next";
import { menuItems } from "./api/home/menu";
export const baseUrl = 'https://studio-dmla.ca';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return menuItems.map((nav, key) =>({url: `${baseUrl}/#${nav.href}`, key}));
}