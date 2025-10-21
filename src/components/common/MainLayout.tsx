import { type PropsWithChildren } from "react";

// 🧩 Main Layout
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex mx-auto w-full max-w-7xl py-5 gap-5">{children}</main>
  );
}
