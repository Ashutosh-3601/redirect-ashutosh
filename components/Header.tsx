import { NextPage } from "next";

const Header: NextPage = () => {
    return (
        <header className="flex flex-col items-center justify-center md:flex-row w-screen h-24 md:h-16 bg-darkGray font-mono">
            <h1 className="font-hack font-bold uppercase inline-flex px-2 text-slate-50 text-3xl">
                {"🔀 Ashutosh's Redirector"}
            </h1>
        </header>
    )
}
export default Header;