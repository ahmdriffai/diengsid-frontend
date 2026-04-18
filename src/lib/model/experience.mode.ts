export type ExperienceType = {
  id: string;
  address: string;
  base_price: number;
  description: string;
  experience_type: string;
  lat: number;
  lng: number;
  thumbnail_url: string;
  title: string;
  created_at: number;
};

export type SearchExperirenceRequest = {
  key?: string;
  type?: string;
  page?: number;
  size?: number;
};
