import { BookmarksIcon, DiscordIcon, DraftsIcon, ExploreIcon, HackathonsIcon, InstagramIcon, LinkedInIcon, MoreIcon, SeeAllIcon, TeamBlogsIcon, TrendingTagIcon, TwitterIcon } from "@/assets/icons/leftNavIcons";
import { cn } from "@/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export function LeftNav() {

    return (
        <div className="max-w-[242px] bg-component_background border-border rounded-[8px] border py-[16px] h-fit sticky top-[20px]">
            <div >
                <div className="flex items-center px-[16px] py-[8px] hover:bg-[#afcfff40]">
                    <ExploreIcon />
                    <span className="ml-4">Explore</span>
                </div>
                <div className="flex items-center px-[16px] py-[8px] hover:bg-[#afcfff40]">
                    <DraftsIcon />
                    <span className="ml-4">Drafts</span>
                </div>
                <div className="flex items-center px-[16px] py-[8px] hover:bg-[#afcfff40]">
                    <BookmarksIcon />
                    <span className="ml-4">Bookmarks</span>
                </div>
                <div className="flex items-center px-[16px] py-[8px] hover:bg-[#afcfff40]">
                    <HackathonsIcon />
                    <span className="ml-4">Hackathons</span>
                </div>
                <div className="flex items-center px-[16px] py-[8px] hover:bg-[#afcfff40]">
                    <TeamBlogsIcon />
                    <span className="ml-4">Team Blog</span>
                </div>
                <div className="flex items-center px-[16px] py-[8px] hover:bg-[#afcfff40]">
                    <MoreIcon />
                    <span className="ml-4">More</span>
                </div>
            </div>
            <div className="px-[16px]">
                <div className="h-[1px] w-full bg-border my-[20px]"></div>
            </div>
            <div>
                <div className="flex items-center px-[16px] mb-[20px]">
                    <span className={cn(jakarta.className, "mr-2 text-gray_shade font-semibold")}>Trending tags</span>
                    <TrendingTagIcon className="w-[20px] h-[20px]" />
                </div>
                <div className="px-[16px]">
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span>Devops</span>
                        <div className="text-[0.7rem] px-[8px] py-[4px] bg-[#ffffff05] border border-border w-fit rounded-full">+480</div>
                    </div>
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span>JavaScript</span>
                        <div className="text-[0.7rem] px-[8px] py-[4px] bg-[#ffffff05] border border-border w-fit rounded-full">+287</div>
                    </div>
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span>Linux</span>
                        <div className="text-[0.7rem] px-[8px] py-[4px] bg-[#ffffff05] border border-border w-fit rounded-full">+246</div>
                    </div>
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span>Web Development</span>
                        <div className="text-[0.7rem] px-[8px] py-[4px] bg-[#ffffff05] border border-border w-fit rounded-full">+239</div>
                    </div>
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span>TrainWithShubHarm</span>
                        <div className="text-[0.7rem] px-[8px] py-[4px] bg-[#ffffff05] border border-border w-fit rounded-full">+151</div>
                    </div>
                    <div className="flex items-center justify-between p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span>Programming</span>
                        <div className="text-[0.7rem] px-[8px] py-[4px] bg-[#ffffff05] border border-border w-fit rounded-full">+146</div>
                    </div>
                    <div className="flex items-center p-1 rounded-lg hover:bg-[#afcfff10] cursor-pointer">
                        <span className="mr-2">See all</span>
                        <SeeAllIcon />
                    </div>
                </div>
            </div>
            <div className="my-[40px] px-[16px] flex justify-between">
                <div className="w-[40px] h-[40px] grid place-items-center rounded-lg hover:bg-twitter_logo cursor-pointer transition-all duration-[0.3s]"><TwitterIcon /></div>
                <div className="w-[40px] h-[40px] grid place-items-center rounded-lg hover:bg-linkedin_logo cursor-pointer transition-all duration-[0.3s]"><LinkedInIcon /></div>
                <div className="w-[40px] h-[40px] grid place-items-center rounded-lg hover:bg-instagram_logo cursor-pointer transition-all duration-[0.3s]"><InstagramIcon /></div>
                <div className="w-[40px] h-[40px] grid place-items-center rounded-lg hover:bg-discord_logo cursor-pointer transition-all duration-[0.3s]"><DiscordIcon /></div>
            </div>
            <div className="h-[1px] w-[25%] bg-border ml-[16px]"></div>
            <div className="text-[0.8rem] ml-[16px] my-[20px]">© 2023 Hashnode</div>
        </div>
    )
}