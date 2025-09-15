"use client";
import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const onLoad = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (
                    installingWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    // Dispatch custom event
                    window.dispatchEvent(new Event("swUpdated"));
                  }
                };
              }
            };
          })
          .catch((err) => {
            console.error("SW registration failed:", err);
          });
      };

      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad);

      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return null;
}
