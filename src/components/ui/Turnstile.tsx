"use client";

import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    turnstile: {
      render: (el: HTMLElement | string, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
}

export function Turnstile({ onVerify, onError }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const renderedRef = useRef(false);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || renderedRef.current) return;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      console.warn("Turnstile site key not set");
      return;
    }
    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        "error-callback": onError,
        "expired-callback": () => {
          renderedRef.current = false;
          if (widgetIdRef.current) window.turnstile.reset(widgetIdRef.current);
        },
        theme: "light",
        size: "normal",
        retry: "auto",
        "retry-interval": 3000,
      });
      renderedRef.current = true;
    } catch (e) {
      console.error("Turnstile render error:", e);
    }
  }, [onVerify, onError]);

  useEffect(() => {
    // If already loaded
    if (typeof window !== "undefined" && window.turnstile) {
      renderWidget();
      return;
    }

    // Set callback for when script loads
    window.onloadTurnstileCallback = renderWidget;

    // Only add script once
    if (!document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          renderedRef.current = false;
        } catch (_) {}
      }
    };
  }, [renderWidget]);

  return (
    <div ref={containerRef} className="mt-3 min-h-[65px]" />
  );
}
