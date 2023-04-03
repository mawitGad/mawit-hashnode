import { DownArrowIcon, LikeIcon, MessagesIcon, TopRightArrowIcon } from "@/assets/icons/rightNavIcons";
import { cn } from "@/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { avatar28, avatar29, avatar30 } from "@/assets/avatars"
import { chall1, chall2, chall3, chall4, chall5 } from "@/assets/challenges";
import useRightNav from "@/hooks/useRightNav";



const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export function RightNav() {

    const { } = useRightNav()

    return (
        <div className="max-[1023px]:hidden w-full col-span-3">
            <div className="bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Blog Stats</span>
                    <div className="flex items-center px-[12px] py-[4px] border-border border rounded-full hover:bg-[#ffffff20] cursor-pointer">
                        <span className="">Dashboard</span>
                        <TopRightArrowIcon />
                    </div>
                </div>
                <div className="overflow-x-auto my-2">
                    <div className="flex w-max">
                        <div className=" p-[8px] border border-[0px] border-b-[2px] border-accent text-accent hover:bg-[#ffffff20] cursor-pointer rounded-t-lg ">Pageviews</div>
                        <div className="mx-2 hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px]">Articles</div>
                        <div className=" hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px]">Appreciations</div>
                    </div>
                </div>
                <div className="flex border border-border my-4 rounded-lg cursor-pointer">
                    <div className="grow grid place-items-center p-[8px]">7 Days</div>
                    <div className="grow grid place-items-center p-[8px]">30 Days</div>
                </div>
                <canvas id="canvas" className=" border"></canvas>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between mb-6">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Drafts(4)</span>
                    <div className="hover:bg-[#ffffff20] cursor-pointer flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">See all</span>
                    </div>
                </div>
                <div className="text-accent text-[1.05rem] cursor-pointer">
                    the inline-block extra space problem
                </div>
                <div className="cursor-pointer w-fit">Edited Aug 3</div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Trending</span>
                    <div className="hover:bg-[#ffffff20] cursor-pointer flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">See all</span>
                    </div>
                </div>
                <div className=" overflow-x-auto my-2">
                    <div className="flex w-max">
                        <div className="mx-1  hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px] border border-[0px] border-b-[2px] border-accent text-accent">1 week</div>
                        <div className="mx-1  hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px]">1 month</div>
                        <div className="mx-1  hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px]">3 months</div>
                        <div className="mx-1  hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px]">6 months</div>
                    </div>
                </div>
                <div>
                    <div className="cursor-pointer py-[20px] flex border-border border-b-[1px]">
                        <Image src={avatar28} alt="avatar" width={38} height={38} className="cursor-pointer rounded-full w-[38px] h-[38px]" />
                        <div className="ml-4">
                            <p className={cn(jakarta.className, "cursor-pointer font-semibold")}>Setting up the Hacking Environment: Installing Kali Linux on VirtualBox</p>
                            <span className="cursor-pointer text-gray_shade">Sahil Chandravanshi</span>
                            <div className="flex mt-2 items-center">
                                <LikeIcon />
                                <span className="cursor-pointer ml-2">103</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px] flex border-border border-b-[1px]">
                        <Image src={avatar29} alt="avatar" width={38} height={38} className="cursor-pointer rounded-full w-[38px] h-[38px]" />
                        <div className="ml-4">
                            <p className={cn(jakarta.className, "cursor-pointer font-semibold")}>How Asynchronous JavaScript Works: A Deep Dive into Its Execution Process</p>
                            <span className="cursor-pointer text-gray_shade">Sobit Prasad</span>
                            <div className="flex mt-2 items-center">
                                <div className="cursor-pointer flex mx-2">
                                    <LikeIcon />
                                    <span className="ml-2">101</span>
                                </div>
                                <div className="cursor-pointer flex mx-2">
                                    <MessagesIcon />
                                    <span className="ml-2">14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px] flex ">
                        <Image src={avatar30} alt="avatar" width={38} height={38} className="cursor-pointer rounded-full w-[38px] h-[38px]" />
                        <div className="ml-4">
                            <p className={cn(jakarta.className, "cursor-pointer font-semibold")}>ChatGPT in Linux CLI</p>
                            <span className="cursor-pointer text-gray_shade">jaison dsouza</span>
                            <div className="flex mt-2 items-center">
                                <div className="cursor-pointer flex mx-2">
                                    <LikeIcon />
                                    <span className="ml-2">101</span>
                                </div>
                                <div className="cursor-pointer flex mx-2">
                                    <MessagesIcon />
                                    <span className="ml-2">14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:bg-[#ffffff10] w-fit px-[12px] py-[4px] rounded-full text-accent flex items-center font-bold">
                        <span className="mr-2">Show More</span>
                        <DownArrowIcon />
                    </div>
                </div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Bookmarks</span>
                    <div className="hover:bg-[#ffffff20] cursor-pointer flex items-center px-[12px] py-[4px] border-border border rounded-full">
                        <span className="">See all</span>
                    </div>
                </div>
                <div className="py-[16px] border-b-[1px] border-border">
                    <span className="cursor-pointer ">15 Most Valuable Github Repositories For Developers</span>
                    <div className="cursor-pointer text-gray_shade flex items-center mt-">
                        <span>Sumukh M G</span>
                        <div className="w-1 h-1 bg-gray_shade mx-2 rounded-full"></div>
                        <span>2 min read</span>
                    </div>
                </div>
                <div className="py-[16px] border-b-[1px] border-border">
                    <span className="cursor-pointer ">Authentication & Refresh token flow with Nextjs, Typescript, React Query and axios interceptors.</span>
                    <div className="cursor-pointer text-gray_shade flex items-center mt-">
                        <span>K Srinivas Rao</span>
                        <div className="w-1 h-1 bg-gray_shade mx-2 rounded-full"></div>
                        <span>8 min read</span>
                    </div>
                </div>
                <div className="py-[16px] ">
                    <span className="cursor-pointer ">Hashnode Blogs on GitHub Profile</span>
                    <div className="cursor-pointer text-gray_shade flex items-center mt-">
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
                    <span className="mx-2 hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px] border-b-[1px] border-accent">Up for grabs</span>
                    <span className="mx-2 hover:bg-[#ffffff20] cursor-pointer rounded-t-lg p-[8px] ">Completed</span>
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span className="cursor-pointer" >#2articles1week Challenge</span>
                        <p className="cursor-pointer text-gray_shade text-[0.8rem]">Become better at technical writing; accept Hashnode&apos;s writing challenge for four weeks.</p>
                    </div>
                    <Image src={chall1} alt="challenge one" width={64} height={64} className="cursor-pointer w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span className="cursor-pointer" >#WomenWhoTech</span>
                        <p className="cursor-pointer text-gray_shade text-[0.8rem]">Share your story, achievements, or experiences as a woman, non-binary folk in tech or as a #WomenWhoTech ally!</p>
                    </div>
                    <Image src={chall2} alt="challenge one" width={64} height={64} className="cursor-pointer w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span className="cursor-pointer" >#Crazy Blogger</span>
                        <p className="cursor-pointer text-gray_shade text-[0.8rem]">Publish an article every day for 7 days and earn a cool crazy blogger badge!</p>
                    </div>
                    <Image src={chall3} alt="challenge one" width={64} height={64} className="cursor-pointer w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span className="cursor-pointer" >#Talk of the town</span>
                        <p className="cursor-pointer text-gray_shade text-[0.8rem]">Write a story that drives amazing engagement on Hashnode and become the talk of the town!</p>
                    </div>
                    <Image src={chall4} alt="challenge one" width={64} height={64} className="cursor-pointer w-[64px] h-[64px] ml-4" />
                </div>
                <div className="py-[16px] border-b-[1px] border-border flex">
                    <div>
                        <span className="cursor-pointer" >#WordWarrior</span>
                        <p className="cursor-pointer text-gray_shade text-[0.8rem]">Write an in-depth article on your Hashnode blog that&apos;s more than 2000 words and become a word warrior!</p>
                    </div>
                    <Image src={chall5} alt="challenge one" width={64} height={64} className="cursor-pointer w-[64px] h-[64px] ml-4" />
                </div>
            </div>
            <div className="my-[20px] bg-component_background border-border border py-[20px] px-[20px] rounded-[8px]">
                <div className="flex items-center justify-between">
                    <span className={cn(jakarta.className, "text-[1.2rem] font-bold")}>Others</span>
                </div>
                <div className="text-[0.8rem] text-gray_shade my-4">
                    <span className="mx-1 hover:text-accent cursor-pointer">Feature Requests</span>
                    <span className="mx-1 hover:text-accent cursor-pointer">Changelog</span>
                    <span className="mx-1 hover:text-accent cursor-pointer">Hashnode APIS</span>
                </div>
                <div className="text-[0.8rem] text-gray_shade  py-[20px] border-y-[1px] border-border flex">
                    <div className="grow">
                        <div className="grow py-1 hover:text-accent cursor-pointer ">About</div>
                        <div className="grow py-1 hover:text-accent cursor-pointer ">Official Blog</div>
                        <div className="grow py-1 hover:text-accent cursor-pointer ">Support</div>
                        <div className="grow py-1 hover:text-accent cursor-pointer ">OSS ACK</div>
                    </div>
                    <div className="grow">
                        <div className="grow py-1 hover:text-accent cursor-pointer ">Press Kit</div>
                        <div className="grow py-1 hover:text-accent cursor-pointer ">Service Status</div>
                        <div className="grow py-1 hover:text-accent cursor-pointer ">Careers</div>
                    </div>
                </div>
                <div className="text-[0.8rem] text-gray_shade flex my-4">
                    <span className="grow hover:text-accent cursor-pointer">Privacy</span>
                    <span className="grow hover:text-accent cursor-pointer">Terms</span>
                </div>
            </div>
        </div>
    )
}