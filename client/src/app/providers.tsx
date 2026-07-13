// "use client";

// import { PropsWithChildren } from "react";
// import StoreProvider from "@/state/redux";

// export function Providers({ children }: PropsWithChildren<{}>) {
//   return <StoreProvider>{children}</StoreProvider>;
// }

// export default Providers;

// "use client"; 

// export default function Providers({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return children;
// }

"use client";

import StoreProvider from "@/state/redux";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}