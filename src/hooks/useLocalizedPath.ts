import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedPath, type SupportedLang } from "@/lib/i18n-routes";

/**
 * Hook to generate localized paths based on current language.
 * Usage: const lp = useLocalizedPath();
 *        <Link to={lp("services")} />
 *        <Link to={lp("blogPost", { id: "my-post" })} />
 */
export function useLocalizedPath() {
  const { i18n } = useTranslation();

  const currentLang = (
    i18n.language?.startsWith("pt") ? "pt" :
    i18n.language?.startsWith("en") ? "en" : "es"
  ) as SupportedLang;

  return useCallback(
    (key: string, params?: Record<string, string>) =>
      getLocalizedPath(key, currentLang, params),
    [currentLang]
  );
}
