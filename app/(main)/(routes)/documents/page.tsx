"use client"
import Image from "next/image";
import {useUser} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

const DocumentsPage = () => {
    const {user} = useUser();

    console.log(user)

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                alt="Empty"
                height="300"
                width="300"
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.png"
                alt="Empty"
                height="300"
                width="300"
                className="hidden dark:block"
            />
            <h2>Welcome to {user?.username}&apos;s Dejvotion</h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    )
}

export default DocumentsPage;