"use client";

import { Tldraw } from "tldraw";
import 'tldraw/tldraw.css';

const Draw = () => {
  return (
    <div className="p-20 flex flex-row items-center justify-items-center h-screen w-screen fixed inset-0">
      <Tldraw persistenceKey="lielamar-portfolio"/>
    </div>
  );
};

export default Draw;
