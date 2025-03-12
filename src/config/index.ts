export type TConfig = {
  base_url: string;
};

export const config: TConfig = {
  base_url: import.meta.env.VITE_BASE_URL,
};
