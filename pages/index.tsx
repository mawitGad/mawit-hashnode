import Header from "@/components/header/header";
import { cn } from "@/utils";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <main className={cn(inter.className, "relative w-screen h-screen bg-background text-[1rem]")}>
                <Header />
            </main>
        </>
    )
}
