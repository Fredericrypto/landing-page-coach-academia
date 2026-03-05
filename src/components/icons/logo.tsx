import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-extrabold text-2xl tracking-tighter", className)}>
      <span className="text-primary">Fit</span>
      <span className="text-foreground">Evolution</span>
    </div>
  );
}
