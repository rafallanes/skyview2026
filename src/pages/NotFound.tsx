import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">{t("notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <Link to={lp("home")} className="text-primary underline hover:text-primary/80">
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
