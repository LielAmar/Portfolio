"use client";

import { useEffect } from "react";

const KedAIWidget = () => {
  const kedaiWidget = () => {
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.kedai.co.il/kedai-widget.js";
    script.setAttribute("agent-id", "xCDyLOzxSmrTzNMBBqsq");
    script.setAttribute("language", "en");
    window.document.getElementsByTagName("head")[0].appendChild(script);
  };

  useEffect(() => {
    if (document.getElementById("kedai-script")) return;

    kedaiWidget();
  }, []);

  return null;
};

export default KedAIWidget;
