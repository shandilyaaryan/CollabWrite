import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-full w-full">
            <div className="flex gap-3 items-center shrink-0 pr-6">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" height={36} width={36} />
                </Link>
                <h3 className="text-lg">Docs</h3>
            </div>
            <SearchInput />
            <div />
        </nav>
    )
}