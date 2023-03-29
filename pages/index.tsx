import Header from "@/components/header/header";
import { LeftNav } from "@/components/leftNav/leftNav";
import { cn } from "@/utils";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <main className={cn(inter.className, "relative w-screen h-screen bg-background text-[1rem]")}>
                <Header />
                <div className="max-[1536px]:p-[20px] w-screen max-w-[1536px] m-auto">
                    <LeftNav />
                </div>
            </main>
        </>
    )
}
