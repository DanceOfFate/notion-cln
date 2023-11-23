"use client"

import {useScrollTop} from "@/hooks/use-scroll-top";
import {cn} from "@/lib/utils";
import {Logo} from "@/app/(marketing)/_components/logo";
import {ModeToggle} from "@/components/mode-toggle";
import {useConvexAuth} from "convex/react";
import {SignInButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/app/(marketing)/_components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();

    const scrolled = useScrollTop()
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-4">
                {isLoading && (
                    <Spinner/>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton>
                            <Button variant="ghost" size="sm">
                                Login
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm">
                                Get Dejvotion for free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documents">
                                Enter Dejvotion
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                )}
                <ModeToggle/>
            </div>
        </div>
    )
}