import { z } from "zod";
import { PortfolioSchema } from "./schema";

export type Portfolio = z.infer<typeof PortfolioSchema>;

export enum Social {
  Github,
  Linkedin,
  Youtube,
  Medium,
  Twitter,
  Facebook,
  Instagram,
  Outro,
}
