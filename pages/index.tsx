import Header from "@/components/header/header";
import { LeftNav } from "@/components/leftNav/leftNav";
import { RightNav } from "@/components/rightNav/rightNav";
import { cn } from "@/utils";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <main className={cn(inter.className, "relative w-full h-[800px] bg-background text-[1rem]")}>
                <Header />
                <div className="relative overflow max-[1536px]:p-[20px] box-border max-w-[1536px] m-auto flex justify-between ">
                    <LeftNav />
                    <RightNav />
                </div>
            </main>
        </>
    )
}
