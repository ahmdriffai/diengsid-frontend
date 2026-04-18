import { api } from "@/lib/axios";
import type {
  ExperienceType,
  SearchExperirenceRequest,
} from "@/lib/model/experience.mode";
import type { ResponseData } from "@/lib/model/model";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetExperience(search: SearchExperirenceRequest) {
  return useQuery<ResponseData<ExperienceType[]>>({
    queryKey: ["employees", search.key, search.type, search.page, search.size],
    queryFn: async () => {
      const { data } = await api.get("/experiences", {
        params: {
          key: search.key,
          type: search.type,
          page: search.page,
          size: search.size,
        },
      });

      return data;
    },
    enabled: !!search,
    placeholderData: keepPreviousData,
    retry: 2,
  });
}
