"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
    href: string; // Updated to accept any string
    label: string; // Updated to accept any string
}

export const BackButton = ({ href, label }: BackButtonProps) => {
    return (
        <Button
            variant="link" // Assuming "link" is a valid variant, lowercase it.
            className="font-normal w-full"
            size="sm"
            asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
};
