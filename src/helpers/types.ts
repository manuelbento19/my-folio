import { z } from "zod";
import { PortfolioSchema } from "./schema";

export type Portfolio = z.infer<typeof PortfolioSchema>

export enum Social {
    Facebook,
    Twitter,
    Instagram,
    Github,
    Telegram,
    Linkedin,
    Email,
    Whatsapp,
    Youtube,
}