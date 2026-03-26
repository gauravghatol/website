export const getCurrentPath = (location) =>
  `${location?.pathname || ""}${location?.search || ""}${location?.hash || ""}`;

export const getReturnTarget = (location, fallbackPath) =>
  location?.state?.from || fallbackPath;

export const goBackOrFallback = (navigate, location, fallbackPath) => {
  if (location?.state?.from) {
    navigate(location.state.from);
    return;
  }

  if (typeof window !== "undefined" && window.history.length > 1) {
    navigate(-1);
    return;
  }

  navigate(fallbackPath);
};
