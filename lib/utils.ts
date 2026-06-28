export const getAssetUrl = (path: string) => {
  return process.env.NODE_ENV === "production" ? `/portfolio${path}` : path;
};
