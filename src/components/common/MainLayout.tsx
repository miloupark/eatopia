import React, { type PropsWithChildren } from "react";

// 🧩 Main Layout
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto w-full max-w-7xl p-10">
      <div className="space-y-12">{children}</div>
    </main>
  );
}
