import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
    label?: string;
}

export const FullscreenLoader = ({label}: FullscreenLoaderProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-2">
            <LoaderIcon className="size-10 text-black-foreground animate-spin" />
            {label && <p className="text-sm text-black-foreground">{label}</p>}
        </div>
    )
}