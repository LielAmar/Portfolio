"use client";

import { useEffect } from "react";

const KedAIWidget = () => {
  const kedaiWidget = () => {
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.kedai.co.il/kedai-widget.js";
    script.setAttribute("agent-id", "78cKKtLidSHg1ZqMlGY0");
    script.setAttribute("language", "en");
    window.document.getElementsByTagName("head")[0].appendChild(script);
  };

  useEffect(() => {
    kedaiWidget();
  }, []);

  return null;
};

export default KedAIWidget;
