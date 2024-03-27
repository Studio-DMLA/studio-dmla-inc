import { MetadataRoute } from "next";
export const baseUrl = 'https://studio-dmla.ca';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseUrl}/#aboutus`
    },
    {
      url: `${baseUrl}/#wedo`
    },
    {
      url: `${baseUrl}/#spotlight`
    },
    {
      url: `${baseUrl}/#ourimpact`
    },
    {
      url: `${baseUrl}/#contactus`
    },
    {
      url: `${baseUrl}/#bookaconsultation`
    }
  ]
}