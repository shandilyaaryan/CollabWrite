"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string,
    children: React.ReactNode
}

export const RenameDialog = ({ documentId, initialTitle, children }: RenameDialogProps) => {
    const update = useMutation(api.documents.updatebyId);
    const [isUpdating, setIsUpdating] = useState(false);

    const [title, setTitle] = useState(initialTitle);
    const [open, setOpen] = useState(false);
    
    const onSubmit = ({ id: documentId, title: title.trim() || "Untitled"})
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                 {children}
            </DialogTrigger>
            <DialogContent>
                <form>
                    <DialogHeader>
                        <DialogTitle>Rename document</DialogTitle>
                        <DialogDescription>Enter a new name for this document.</DialogDescription>
                    </DialogHeader>
                    <div className="my-4"> 
                        <Input />
                    </div>
                    <DialogFooter><Button>Cancel</Button><Button>Save</Button></DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
};
