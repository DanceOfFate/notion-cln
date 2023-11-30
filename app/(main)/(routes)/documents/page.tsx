"use client"
import Image from "next/image";
import {useUser} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {toast} from "sonner";

const DocumentsPage = () => {
    const {user} = useUser();
    const create = useMutation(api.documents.create);


    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        })
    }

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
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    )
}

export default DocumentsPage;