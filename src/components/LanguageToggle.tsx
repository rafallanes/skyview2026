import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 gap-1.5"
      disabled
    >
      <Globe className="h-3.5 w-3.5" />
      ES
    </Button>
  );
}
