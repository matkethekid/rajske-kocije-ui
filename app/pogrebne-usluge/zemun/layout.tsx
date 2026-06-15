import React from "react";
import { createOpstinaMetadata } from "../../lib/metadata";

export const metadata = createOpstinaMetadata("Zemun");

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}