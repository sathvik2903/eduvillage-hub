import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  onClick: () => void;
  className?: string;
}

export function RoleCard({ title, description, icon, features, onClick, className }: RoleCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-2 transition-all duration-300",
      "hover:shadow-lg hover:scale-[1.02] hover:border-primary/50",
      "bg-gradient-to-br from-card to-accent/20",
      className
    )}>
      <CardContent className="p-8 text-center">
        <div className="mb-6 text-6xl">{icon}</div>
        <h3 className="mb-3 text-2xl font-bold text-card-foreground">{title}</h3>
        <p className="mb-6 text-muted-foreground">{description}</p>
        
        <ul className="mb-8 space-y-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="mr-3 h-2 w-2 rounded-full bg-primary"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={onClick}
          className="w-full bg-gradient-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
          size="lg"
        >
          Continue as {title}
        </Button>
      </CardContent>
    </Card>
  );
}