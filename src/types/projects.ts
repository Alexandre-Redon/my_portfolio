import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  lienGit: z.string(),
  imageUrl: z.optional(z.string()),
  websiteUrl: z.optional(z.string()),
});

export type IProject = z.infer<typeof ProjectSchema>;

export const FindProjectSchema = z.object({
  id: z.string(),
});
export type IFindProject = z.infer<typeof FindProjectSchema>;

export const CreateProjectSchema = z.object({});
export type ICreateProject = z.infer<typeof CreateProjectSchema>;

export type ILoadProject = IFindProject | ICreateProject;

export const ResetSchema = z.object({
  id: z.string(),
});

export type IReset = z.infer<typeof ResetSchema>;
