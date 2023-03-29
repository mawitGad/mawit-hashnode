import { logo_dark } from "@/assets/logos";
import Image from "next/image";
import { cn } from "@/utils";
import { Plus_Jakarta_Sans } from "next/font/google"
import { DownArrowIcon, MenuIcon, NotificationIcon, PencilIcon, SearchIcon, ShareIcon, ThemeIcon } from "@/assets/icons/headerIcons";
import { avatar1 } from "@/assets/avatars";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Header() {
    return (
        <div className={cn("max-[1024px]:px-4 bg-component_background flex justify-center items-center w-full h-[75px] min-[1280px]:px-[2rem] min-[1024px]:px-[1.5rem] border-border border")}>
            <div className="w-full max-w-[1536px] grid grid-cols-[repeat(12,minmax(0,1fr))] max-[1024px]:flex max-[1024px]:justify-between max-[1024px]:items-center items-center h-[75px]">
                <div className="flex col-span-2 items-center max-[768px]:w-[170px]">
                    <MenuIcon className="mx-4 max-[1024px]:block hidden cursor-pointer" />
                    <Image src={logo_dark} alt="logo_dark" width={169.35} height={28.6} className="cursor-pointer" />
                </div>
                <div className={cn("flex items-center col-span-7 h-[42px] max-[1280px]:col-span-6 max-[1024px]:hidden")} >
                    <div className={cn(jakarta.className, "cursor-pointer font-bold text-my_feed_blue px-[16px] py-[6px] rounded-full border border-border ml-2 hover:bg-[#ffffff10]")}>My Feed</div>
                    <div className="flex items-center grow h-full">
                        <div className="cursor-pointer flex  h-[42px] items-center px-4 mx-2 rounded-full hover:bg-[#ffffff10]">
                            <div className={cn(jakarta.className, " text-rix_gray font-bold mx-2")}>Rix</div>
                            <div className={cn(jakarta.className, " bg-[linear-gradient(110.31deg,_#24429C_15.39%,_#8638EA_84.61%)] px-2 text-[0.8rem] font-bold rounded-full flex items-center")}>new</div>
                        </div>
                        <div className="cursor-pointer h-full grow relative mx-4 w-[50px] ">
                            <input type="text" className=" focus-visible:outline-none focus-visible:outline-accent focus-visible:outline-[1px] hover:outline-border hover:outline hover:outline-[1px] bg-transparent w-full h-full rounded-full pl-8" placeholder="Search Hashnode" />
                            <SearchIcon className="absolute top-0 bottom-0 h-fit m-auto left-2" />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 max-[768px]:w-fit max-[1280px]:col-span-4 max-[1024px]:w-[280px] flex justify-between items-center">
                    <div className="max-[768px]:hidden flex h-[42px] bg-header_write_color w-fit items-center rounded-full overflow-hidden ">
                        <div className="flex h-full flex items-center px-2 hover:bg-[#ffffff20] cursor-pointer">
                            <PencilIcon className="w-[16px] h-[16px]" />
                            <div className="ml-2 text-[0.8rem] font-bold">Write</div>
                        </div>
                        <div className="h-[15px] w-[1px] bg-white"></div>
                        <div className="flex items-center justify-center px-2 hover:bg-[#ffffff20] h-full cursor-pointer">
                            <DownArrowIcon />
                        </div>
                    </div>
                    <div className="hover:bg-[#ffffff10] cursor-pointer w-[42px] h-[42px] grid place-items-center rounded-full">
                        <ShareIcon className={"max-[768px]:hidden header-icon"} />
                    </div>
                    <div className="hover:bg-[#ffffff10] cursor-pointer w-[42px] h-[42px] grid place-items-center rounded-full">
                        <ThemeIcon className="max-[768px]:mr-4 header-icon" />
                    </div>
                    <div className="hover:bg-[#ffffff10] cursor-pointer w-[42px] h-[42px] grid place-items-center rounded-full">
                        <NotificationIcon className={"max-[768px]:hidden header-icon"} />
                    </div>
                    <Image src={avatar1} alt={"avatar"} width={40} height={40} className={"rounded-full cursor-pointer"} />
                </div>
            </div>
        </div>
    )
}