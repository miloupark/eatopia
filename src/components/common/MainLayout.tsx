import { type PropsWithChildren } from "react";

// 🧩 Main Layout
export default function MainLayout({ children }: PropsWithChildren) {
  return <main className="mx-auto w-full max-w-7xl p-10">{children}</main>;
}
