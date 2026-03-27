export const getCurrentPath = (location) =>
  `${location?.pathname || ""}${location?.search || ""}${location?.hash || ""}`;

export const getPathWithTab = (location, tabId) => {
  const params = new URLSearchParams(location?.search || "");
  params.set("tab", tabId);

  const search = params.toString();

  return `${location?.pathname || ""}${search ? `?${search}` : ""}${location?.hash || ""}`;
};

export const getRequestedTab = (location, fallbackTab = "overview") =>
  new URLSearchParams(location?.search || "").get("tab") || fallbackTab;

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
