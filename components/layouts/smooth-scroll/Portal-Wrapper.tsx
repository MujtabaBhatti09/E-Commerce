"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface PortalWrapperProps {
  children: React.ReactNode;
  targetId?: string; // defaults to "portal-root"
  className?: string;
}

export default function PortalWrapper({ children, className, targetId = "portal-root" }: PortalWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const target = document.getElementById(targetId);
  if (!target) return null;

  return createPortal(<div className={className}>{children}</div>, target);
}
