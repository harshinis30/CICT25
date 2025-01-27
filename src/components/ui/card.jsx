import * as React from "react"

import { cnJoin } from "../../lib/utils"


const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cnJoin("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cnJoin("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardImage = React.forwardRef(({ src, alt, className, ...props }, ref) => (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={cnJoin("w-full rounded-t-lg", className)}
      {...props}
    />
  ));
  CardImage.displayName = "CardImage";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cnJoin("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cnJoin("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cnJoin("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"


export { Card, CardHeader, CardImage, CardTitle, CardDescription, CardContent }
