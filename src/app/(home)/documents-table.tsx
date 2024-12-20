import { PaginationStatus } from "convex/react";
import { Doc } from "../../../convex/_generated/dataModel"
import { LoaderIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DocumentsTableProps {
    documents: Doc<"documents">[] | undefined;
    loadMore:(numItems: number) => void;
    status: PaginationStatus
}


export const DocumentsTable = ({documents, loadMore, status}: DocumentsTableProps) => {
    return (
        <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
            {documents === undefined ? (
            <div className="flex justify-center items-center h-24">
                <LoaderIcon className="animate spin text-black-foreground size-5" />
            </div>) : (
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead>Name</TableHead>
                            <TableHead>&nbsp;</TableHead>
                            <TableHead>Shared</TableHead>
                            <TableHead>Created At</TableHead>
                        </TableRow>
                    </TableHeader>
                    {documents.length === 0 ? (
                        <TableBody>
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                                    No documents found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ) : (
                        <TableBody>
                            Documents
                        </TableBody>
                    )}
                </Table>
            )}
        </div>
    )
}