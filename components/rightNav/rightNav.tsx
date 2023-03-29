import { DownArrowIcon, LikeIcon, MessagesIcon, TopRightArrowIcon } from "@/assets/icons/rightNavIcons";
import { cn } from "@/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { avatar28, avatar29, avatar30 } from "@/assets/avatars"
import { chall1, chall2, chall3, chall4, chall5 } from "@/assets/challenges";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export function RightNav() {

    return (
        <div className="max-w-[372px] ">
            <div className="bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Blog Stats</span>
                    <div className="flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">Dashboard</span>
                        <TopRightArrowIcon />
                    </div>
                </div>
                <div className="flex overflow-x-auto">
                    <div className="p-[8px] border border-[0px] border-b-[2px] border-accent text-accent">Pageviews</div>
                    <div className="p-[8px]">Articles</div>
                    <div className="p-[8px]">Appreciations</div>
                </div>
                <div className="flex border border-border my-4 rounded-lg">
                    <div className="grow grid place-items-center p-[8px]">7 Days</div>
                    <div className="grow grid place-items-center p-[8px]">30 Days</div>
                </div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between mb-6">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Drafts(4)</span>
                    <div className="flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">See all</span>
                    </div>
                </div>
                <div className="text-accent text-[1.05rem]">
                    the inline-block extra space problem
                </div>
                <div>Edited Aug 3</div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Trending</span>
                    <div className="flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">See all</span>
                    </div>
                </div>
                <div className="flex overflow-x-auto">
                    <div className="p-[8px] border border-[0px] border-b-[2px] border-accent text-accent">1 week</div>
                    <div className="p-[8px]">1 month</div>
                    <div className="p-[8px]">3 months</div>
                    <div className="p-[8px]">6 months</div>
                </div>
                <div>
                    <div className="py-[20px] flex border-border border-b-[1px]">
                        <Image src={avatar28} alt="avatar" width={38} height={38} className="rounded-full w-[38px] h-[38px]" />
                        <div className="ml-4">
                            <p className={cn(jakarta.className, "font-semibold")}>Setting up the Hacking Environment: Installing Kali Linux on VirtualBox</p>
                            <span className="text-gray_shade">Sahil Chandravanshi</span>
                            <div className="flex mt-2 items-center">
                                <LikeIcon />
                                <span className="ml-2">103</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px] flex border-border border-b-[1px]">
                        <Image src={avatar29} alt="avatar" width={38} height={38} className="rounded-full w-[38px] h-[38px]" />
                        <div className="ml-4">
                            <p className={cn(jakarta.className, "font-semibold")}>How Asynchronous JavaScript Works: A Deep Dive into Its Execution Process</p>
                            <span className="text-gray_shade">Sobit Prasad</span>
                            <div className="flex mt-2 items-center">
                                <div className="flex mx-2">
                                    <LikeIcon />
                                    <span className="ml-2">101</span>
                                </div>
                                <div className="flex mx-2">
                                    <MessagesIcon />
                                    <span className="ml-2">14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px] flex ">
                        <Image src={avatar30} alt="avatar" width={38} height={38} className="rounded-full w-[38px] h-[38px]" />
                        <div className="ml-4">
                            <p className={cn(jakarta.className, "font-semibold")}>ChatGPT in Linux CLI</p>
                            <span className="text-gray_shade">jaison dsouza</span>
                            <div className="flex mt-2 items-center">
                                <div className="flex mx-2">
                                    <LikeIcon />
                                    <span className="ml-2">101</span>
                                </div>
                                <div className="flex mx-2">
                                    <MessagesIcon />
                                    <span className="ml-2">14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-accent flex items-center font-bold">
                        <span className="mr-2">Show More</span>
                        <DownArrowIcon />
                    </div>
                </div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Bookmarks</span>
                    <div className="flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">See all</span>
                    </div>
                </div>
                <div className="py-[16px] border-b-[1px] border-border">
                    <span>15 Most Valuable Github Repositories For Developers</span>
                    <div className="text-gray_shade flex items-center mt-">
                        <span>Sumukh M G</span>
                        <div className="w-1 h-1 bg-gray_shade mx-2 rounded-full"></div>
                        <span>2 min read</span>
                    </div>
                </div>
                <div className="py-[16px] border-b-[1px] border-border">
                    <span>Authentication & Refresh token flow with Nextjs, Typescript, React Query and axios interceptors.</span>
                    <div className="text-gray_shade flex items-center mt-">
                        <span>K Srinivas Rao</span>
                        <div className="w-1 h-1 bg-gray_shade mx-2 rounded-full"></div>
                        <span>8 min read</span>
                    </div>
                </div>
                <div className="py-[16px] ">
                    <span>Hashnode Blogs on GitHub Profile</span>
                    <div className="text-gray_shade flex items-center mt-">
                        <span>Sadra Yahyapour</span>
                        <div className="w-1 h-1 bg-gray_shade mx-2 rounded-full"></div>
                        <span>3 min read</span>
                    </div>
                </div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Write Challenges</span>
                </div>
                <div className="flex">
                    <span className="p-[8px] border-b-[1px] border-accent">Up for grabs</span>
                    <span className="p-[8px] ">Completed</span>
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span>#2articles1week Challenge</span>
                        <p className="text-gray_shade text-[0.8rem]">Become better at technical writing; accept Hashnode's writing challenge for four weeks.</p>
                    </div>
                    <Image src={chall1} alt="challenge one" width={64} height={64} className="w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span>#WomenWhoTech</span>
                        <p className="text-gray_shade text-[0.8rem]">Share your story, achievements, or experiences as a woman, non-binary folk in tech or as a #WomenWhoTech ally!</p>
                    </div>
                    <Image src={chall2} alt="challenge one" width={64} height={64} className="w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span>#Crazy Blogger</span>
                        <p className="text-gray_shade text-[0.8rem]">Publish an article every day for 7 days and earn a cool crazy blogger badge!</p>
                    </div>
                    <Image src={chall3} alt="challenge one" width={64} height={64} className="w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span>#Talk of the town</span>
                        <p className="text-gray_shade text-[0.8rem]">Write a story that drives amazing engagement on Hashnode and become the talk of the town!</p>
                    </div>
                    <Image src={chall4} alt="challenge one" width={64} height={64} className="w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span>#WordWarrior</span>
                        <p className="text-gray_shade text-[0.8rem]">Write an in-depth article on your Hashnode blog that's more than 2000 words and become a word warrior!</p>
                    </div>
                    <Image src={chall5} alt="challenge one" width={64} height={64} className="w-[64px] h-[64px] ml-4" />
                </div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Others</span>
                </div>
                <div className="text-[0.8rem] text-gray_shade my-4">Feature Requests Changelog Hashnode APIS</div>
                <div className="text-[0.8rem] text-gray_shade  py-[20px] border-y-[1px] border-border flex">
                    <div className="grow">
                        <div className="grow py-1">About</div>
                        <div className="grow py-1">Official Blog</div>
                        <div className="grow py-1">Support</div>
                        <div className="grow py-1">OSS ACK</div>
                    </div>
                    <div className="grow">
                        <div className="grow py-1">Press Kit</div>
                        <div className="grow py-1">Service Status</div>
                        <div className="grow py-1">Careers</div>
                    </div>
                </div>
                <div className="text-[0.8rem] text-gray_shade flex my-4">
                    <span className="grow">Privacy</span>
                    <span className="grow">Terms</span>
                </div>
            </div>
        </div>
    )
}