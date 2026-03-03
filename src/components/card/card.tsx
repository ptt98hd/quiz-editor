import type { ComponentProps } from "react";
import "./card.css";

type CardProps = ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return <div className={`card shadow ${className ?? ""}`} {...props} />;
}

type CardContentProps = ComponentProps<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={`card-content ${className ?? ""}`} {...props} />;
}

type CardHeaderProps = ComponentProps<"div">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={`card-header ${className ?? ""}`} {...props} />;
}

type CardTitleProps = ComponentProps<"h3">;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <div className={`card-title ${className ?? ""}`} {...props} />;
}

type CardDescriptionProps = ComponentProps<"p">;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <div className={`card-description ${className ?? ""}`} {...props} />;
}
