import React from "react";
import crypto from "node:crypto";
import { generateBase64String } from "@/utils/secret-gen";
import SecretWithCopy from "./_secret";

export default function Home() {
  const base64String = generateBase64String(33);

  return (
    <div className="max-w-screen-md mx-auto flex items-center justify-center flex-col h-screen">
      <h1 className="text-4xl font-semibold">Generate Secret</h1>
      <div className="mt-10">
        <SecretWithCopy secret={base64String} />
      </div>
    </div>
  );
}
