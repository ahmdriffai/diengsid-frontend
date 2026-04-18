import z from "zod";
import type { UserType } from "./user.model";

export type AuthType = {
  token: string;
  user: UserType;
};

export const AuthGoogleSchema = z.object({
  token: z.string(),
});
