"use client";

import React, { FC, useState } from "react";

type Props = {
  secret: string;
};

const SecretWithCopy: FC<Props> = ({ secret }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(secret);
      setIsCopied(true);
    } catch (err) {
      setError("Unable to copy to clipboard, did you give permission to copy?");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {error && <p>{error}</p>}
      <p className="text-xl font-medium">{secret}</p>
      <button onClick={copyToClipboard} className="bg-lime-400 px-4 py-2 rounded-full font-medium">
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default SecretWithCopy;
