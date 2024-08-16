import { z } from "zod";

const REQUIRED_FIELD_MESSAGE = "Campo obrigatório";

const SkillSchema = z.object({
  name: z.string().min(1, REQUIRED_FIELD_MESSAGE),
});

const LanguageSchema = z.object({
  name: z.string().min(1, REQUIRED_FIELD_MESSAGE),
});
const PersonalInfoSchema = z.object({
  name: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  title: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  about: z.string().optional(),
  address: z.string().optional(),
  email: z.string().email().optional(),
});

const ProjectSchema = z.object({
  title: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  description: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  techs: z.string(),
  link: z.string().url().min(1, REQUIRED_FIELD_MESSAGE),
});

const ExperienceSchema = z.object({
  title: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  company: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  location: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  start_date: z.date().or(z.string().min(1, REQUIRED_FIELD_MESSAGE)),
  end_date: z.coerce.date().optional(),
  responsibilities: z.string(),
});

const CertificationSchema = z.object({
  title: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  provider: z.string().min(1, REQUIRED_FIELD_MESSAGE),
  date: z.date().or(z.string().min(1, REQUIRED_FIELD_MESSAGE)),
});

const ContactSchema = z.object({
  type: z.string(),
  link: z.string().url(),
});

export const PortfolioSchema = z.object({
  personal: PersonalInfoSchema,
  skills: z.array(SkillSchema),
  projects: z.array(ProjectSchema),
  experiences: z.array(ExperienceSchema),
  certifications: z.array(CertificationSchema),
  languages: z.array(LanguageSchema),
  contacts: z.array(ContactSchema),
});
