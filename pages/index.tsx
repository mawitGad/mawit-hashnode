import Header from "@/components/header/header";
import { LeftNav } from "@/components/leftNav/leftNav";
import { MiddleSection } from "@/components/middleSection/middleSection";
import { RightNav } from "@/components/rightNav/rightNav";
import { cn } from "@/utils";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <main className={cn(inter.className, "relative w-full h-[800px] bg-background text-[1rem]")}>
                <Header />
                <div className="relative max-[1536px]:p-[20px] max-[1023px]:p-0 box-border max-w-[1536px] m-auto grid grid-cols-[repeat(12,minmax(0,1fr))] pt-[20px] gap-x-[20px] w-full ">
                    <LeftNav />
                    <MiddleSection />
                    <RightNav />
                </div>
            </main>
        </>
    )
}
