"use client";

import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "horizontal" | "stacked" | "icon" | "text";
  theme?: "dark" | "light";
  className?: string;
  href?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  variant = "horizontal",
  theme = "dark",
  className = "",
  href = "#",
}: LogoProps) {
  const isDark = theme === "dark";

  // Height configurations for balanced optical alignment
  const iconSizes = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-11 w-auto",
    xl: "h-14 w-auto",
  };

  const textSizes = {
    sm: "h-3.5 w-auto",
    md: "h-4.5 w-auto",
    lg: "h-6 w-auto",
    xl: "h-8 w-auto",
  };

  const stackedSizes = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto",
    xl: "h-28 w-auto",
  };

  const iconSrc = isDark ? "/icon-dark.png" : "/icon.png";
  const textSrc = isDark ? "/Valen-info-text-dark.png" : "/Valen-info-text.png";
  const stackedLogoSrc = isDark ? "/logo-dark.png" : "/logo.png";

  let logoElement;

  if (variant === "stacked") {
    logoElement = (
      <img
        src={stackedLogoSrc}
        alt="Valen Info Logo"
        className={`${stackedSizes[size]} object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-all duration-300`}
      />
    );
  } else if (variant === "icon" || !showText) {
    logoElement = (
      <img
        src={iconSrc}
        alt="Valen Info Icon"
        className={`${iconSizes[size]} object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-all duration-300`}
      />
    );
  } else if (variant === "text") {
    logoElement = (
      <img
        src={textSrc}
        alt="Valen Info"
        className={`${textSizes[size]} object-contain group-hover:opacity-90 transition-opacity duration-300`}
      />
    );
  } else {
    // Horizontal layout: Icon + Text
    logoElement = (
      <div className="flex items-center gap-2.5 sm:gap-3">
        <img
          src={iconSrc}
          alt="Valen Info Mark"
          className={`${iconSizes[size]} object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-all duration-300`}
        />
        <img
          src={textSrc}
          alt="Valen Info"
          className={`${textSizes[size]} object-contain group-hover:opacity-90 transition-opacity duration-300`}
        />
      </div>
    );
  }

  const content = (
    <div className={`inline-flex items-center group select-none ${className}`}>
      {logoElement}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center rounded-lg"
        aria-label="Valen Info Home"
      >
        {content}
      </a>
    );
  }

  return content;
}


