// src/utils/createPageUrl.js

/**
 * Generates a consistent URL path for pages in your app.
 * Example: createPageUrl("AppPreview") -> "/app-preview"
 */

export const createPageUrl = (pageName) => {
  if (!pageName) return "/";

  // convert "AppPreview" -> "app-preview"
  const formatted = pageName
    .replace(/([a-z])([A-Z])/g, "$1-$2") // add dash between camelCase words
    .toLowerCase();

  return `/${formatted}`;
};
