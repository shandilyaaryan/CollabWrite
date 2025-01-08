import { TableCell, TableRow } from "@/components/ui/table"
import { Doc } from "../../../convex/_generated/dataModel"
import { SiGoogledocs } from "react-icons/si"
import { Building2Icon, CircleUserIcon } from "lucide-react"
import { format } from "date-fns"
import { DocumentMenu } from "./documentMenu"
import { useRouter } from "next/navigation"

interface DocumentRowProps{
    document: Doc<"documents">
}

export const DocumentRow = ({document}: DocumentRowProps) => {
    const router = useRouter();
    const onNewTabClick = (id: string) => {
        window.open(`/document/${id}`, "_blank")
    }
    const openDoc = (id: string) => {
        router.push(`/document/${id}`)
    }


    return(
        <TableRow className="cursor-pointer" onClick={() => openDoc(document._id)}>
            <TableCell className="w-[50px]">
                <SiGoogledocs className="size-6 fill-blue-500" />
            </TableCell>
            <TableCell className="font-medium md:w-[45%]">
                {document.title}
            </TableCell>
            <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
                {document.organizationId ? <Building2Icon className="size-4" /> : <CircleUserIcon className="size-4" /> } 
                {document.organizationId ? "Organization" : "Personal"}
            </TableCell>
            <TableCell className="text-muted-foreground hidden md:table-cell">
                {format(new Date(document._creationTime), "MMM dd, yyyy")}
            </TableCell>
            <TableCell className="flex justify-end">
                <DocumentMenu documentId={document._id} title={document.title} onNewTab={onNewTabClick} />
            </TableCell>
        </TableRow>
    )
}