"use client";

import { useState } from "react";

export default function Home() {
  const example =
    "Prettier needs three layers — the npm package (so the extension can resolve it), editor settings (format on save), and optionally eslint-config-prettier so lint and format don't fight each other.";

  const [typedText, setTypedText] = useState("");
  const [goalText, setGoalText] = useState(example);

  const correct = "text-green-800";
  const wrong = "text-red-800";

  const decideCharColor = (index: number) => {
    if (index >= typedText.length) return "";

    if (goalText[index] === typedText[index]) return correct;
    else return wrong;
  };
  return (
    <div className="flex h-svh items-center justify-center relative">
      <div className="text-3xl bg-green px-20 opacity-65">
        {goalText.split("").map((char, i) => {
          return (
            <>
              {i === typedText.length && (
                <span className="border-l-2 animate-pulse"></span>
              )}
              <span key={i} className={decideCharColor(i)}>
                {char}
              </span>
            </>
          );
        })}
      </div>
      <input
        className="absolute"
        placeholder="hi"
        type="text"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
      />
    </div>
  );
}
