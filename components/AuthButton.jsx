"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { signOut } from "@/app/actions";

export default function AuthButton({ user }) {
    const [showAuthModal, setShowAuthModal] = useState(false);

    if (user) {
        return (
            <form action={signOut}>
                <Button
                    variant="ghost"
                    type="submit"
                    size="sm"
                    className="mr-10 w-30 h-10 bg-orange-500 hover:bg-orange-600 gap-2"
                >
                    Sign Out
                </Button>
            </form>
        );
    }

    return (
        <>
            <button
                onClick={() => setShowAuthModal(true)}
                variant="default"
                size="sm"
                className="mr-10 w-30 h-10 bg-orange-500 hover:bg-orange-600 gap-2"
            >
                Sign In
            </button>
            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </>
    )
}