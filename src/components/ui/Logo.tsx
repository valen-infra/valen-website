"use client";

import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  href?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  href = "#",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-7 md:h-8",
    md: "h-9 md:h-10",
    lg: "h-12 md:h-14",
    xl: "h-16 md:h-20",
  };

  const logoSrc = showText ? "/logo.svg" : "/logo-icon.svg";

  const content = (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Valen Info Logo"
        className={`${sizeClasses[size]} w-auto object-contain filter drop-shadow-[0_0_12px_rgba(0,208,148,0.4)] group-hover:scale-105 transition-transform duration-300`}
      />
    </div>
  );


  if (href) {
    return (
      <a href={href} className="focus:outline-none inline-block rounded-lg" aria-label="Valen Info Home">
        {content}
      </a>
    );
  }

  return content;
}
