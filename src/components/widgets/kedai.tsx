"use client";

import { useEffect, useState } from "react";

const KedAIWidget = () => {
  const [loadedScript, setLoadedScript] = useState(false);

  const kedaiWidget = () => {
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.kedai.co.il/kedai-widget.js";
    script.setAttribute("data-agent_id", "xTvQH52f0IgEzndao5EH");
    window.document.getElementsByTagName("head")[0].appendChild(script);
  };

  useEffect(() => {
    if (loadedScript) return;
    console.log("Loading KedAI widget script...");
    kedaiWidget();
    setLoadedScript(true);
  }, []);

  return <div id="kedai" lang="en"></div>;
};

export default KedAIWidget;
