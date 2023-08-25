import { netflixBuild } from "./documents/netflixBuild";
import { githubApiFetcher } from "./documents/githubApiFetcher";
import { ecommerce } from "./documents/ecommerce";

export interface PortfolioProject {
  id: string;
  name: string;
  label: string;
  feature: boolean;
  position?: number;
  primaryImage: ProjectImage;
  domainName: string;
  url: string;
  metaDescription?: string;
  description: string;
  technologies: {
    id: number;
    name: string;
    url: string;
  }[];
  durationOfCompletion: string;
  myRole: string;
  productsDeveloped: string[];
  snapshots: ProjectImage[];
  theme: string;
}

export interface ProjectImage {
  id: number;
  name?: string;
  url: string;
  highResUrl?: string;
}

const projectObjects = [netflixBuild, githubApiFetcher, ecommerce];

export default projectObjects;
