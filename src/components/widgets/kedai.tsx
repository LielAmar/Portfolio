"use client";

import { useEffect } from "react";

const KedAIWidget = () => {
  const kedaiWidget = () => {
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.kedai.co.il/kedai-widget.js";
    script.setAttribute("agent-id", "xTvQH52f0IgEzndao5EH");
    script.setAttribute("language", "en");
    window.document.getElementsByTagName("head")[0].appendChild(script);
  };

  useEffect(() => {
    kedaiWidget();
  }, []);

  return null;
};

export default KedAIWidget;
