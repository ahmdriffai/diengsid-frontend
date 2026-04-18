/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/axios";
import type { AuthGoogleSchema, AuthType } from "@/lib/model/auth.model";
import type { ResponseData } from "@/lib/model/model";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useLocalStorage } from "react-use";
import { toast } from "sonner";
import type z from "zod";

export const useAuthGoogle = () => {
  const [, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: z.infer<typeof AuthGoogleSchema>) =>
      await api.post("/auth/google", data),
    onSuccess: async (response) => {
      if (response.status === 200) {
        const data: ResponseData<AuthType> = response.data;
        const token = data.data.token;
        setToken(token);
        toast.success(data.message);
        await navigate(0);
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong");
    },
  });
};

export const useLogout = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => await api.delete(`/auth/_logout?token=${token}`),
    onSuccess: async (response) => {
      if (response.status === 200) {
        const data: ResponseData<null> = response.data;
        setToken("");
        toast.success(data.message);
        await navigate(0);
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong");
    },
  });
};
