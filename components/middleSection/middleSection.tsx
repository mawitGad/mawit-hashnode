import { avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar2, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25, avatar26, avatar27, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, blogAvatar1 } from "@/assets/avatars";
import { AvatarStarIcon, BookmarkIcon, CommentsIcon, CrossIcon, FeaturedIcon, FeaturedPostIcon, FilterIcon, HostBlogIcon, LogoIcon, LoveIcon, PersonalizedIcon, PlusIcon, ReadIcon, RecentIcon, RecommendedBlogIcon, RecommendedPlusIcon, SeriesIcon, TwitterIcon, TwitterWhiteIcon, ViewIcon } from "@/assets/icons/centerSectionIcons";
import { thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8 } from "@/assets/thumbnails";
import { cn } from "@/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export function MiddleSection() {

    return (
        <div className="max-[1023px]:col-span-12 w-full col-span-7">
            <div className="bg-component_background p-[20px] rounded-[8px] border-border border overflow-auto ">
                <div className="flex w-max items-center">
                    <div className="cursor-pointer hover:opacity-80 mx-2 w-[58px] h-[58px] relative grid place-items-center rounded-full bg-[linear-gradient(110.31deg,_#24429C_15.39%,_#8638EA_84.61%)]">
                        <Image src={avatar2} alt="avatar" width={50} height={50} className="rounded-full" />
                        <span className="bg-red px-1 leading-[0px] w-6 h-6 bottom-0 right-0 text-[15px] absolute grid place-items-center rounded-full">1</span>
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2">
                        <Image src={avatar3} alt="avatar" width={50} height={50} className="rounded-full" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar5} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar6} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar7} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar8} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar9} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar10} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar11} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar12} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar13} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar14} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                    <div className="cursor-pointer hover:opacity-80 mx-2 relative">
                        <Image src={avatar15} alt="avatar" width={50} height={50} className="rounded-full" />
                        <AvatarStarIcon className="absolute top-0 right-0" />
                    </div>
                </div>
            </div>
            <div className="relative my-[20px] px-12 h-[239px] bg-[#1DA1F215] border border-twitter_color rounded-lg flex items-center justify-center">
                <div className="flex items-center max-[1023px]:flex-col">
                    <div className="flex items-end">
                        <LogoIcon />
                        <PlusIcon className="mx-2" />
                        <TwitterIcon />
                    </div>
                    <span className=" text-[1.2rem] mx-4 my-4">
                        Discover Hashnode writers you already follow on Twitter.
                    </span>
                    <div className="flex bg-twitter_color items-center px-4 py-[10px] rounded-full hover:opacity-90 cursor-pointer">
                        <TwitterWhiteIcon />
                        <span className="text-[0.9rem] whitespace-nowrap font-bold ml-2">Connect your Twitter</span>
                    </div>
                </div>
                <div className="absolute top-4 right-6 px-4 py-2 hover:bg-[#ffffff30] cursor-pointer rounded-full">
                    <CrossIcon className="w-[10px] h-[10px]" />
                </div>
            </div>
            <div className="bg-component_background py-[20px] rounded-lg border border-border">
                <div className="flex justify-between  items-center px-[20px] w-full ">
                    <div className="overflow-x-auto ">
                        <div className="flex">
                            <div className="cursor-pointer hover:bg-[#ffffff20] rounded-t-lg py-[10px] px-4 flex items-center mx-1 border-b-[2px] border-accent ">
                                <PersonalizedIcon />
                                <span className="ml-2">Personalized</span>
                            </div>
                            <div className="cursor-pointer hover:bg-[#ffffff20] rounded-t-lg py-[10px] px-4 flex items-center mx-1">
                                <FeaturedIcon />
                                <span className="ml-2">Feature</span>
                            </div>
                            <div className="cursor-pointer hover:bg-[#ffffff20] rounded-t-lg py-[10px] px-4 flex items-center mx-1">
                                <RecentIcon />
                                <span className="ml-2">Recent</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="cursor-pointer p-2 hover:bg-[#ffffff20] rounded-full">
                            <FilterIcon />
                        </div>
                        <div className="cursor-pointer flex ml-4 px-4 items-center hover:bg-[#ffffff20] rounded-t-lg py-[10px]">
                            <ViewIcon />
                            <span className="ml-2">View</span>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar14} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <span className="cursor-pointer font-bold">Kristof Reibbels</span>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">dotne.Kreibbels.me</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">21 hours ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer flex absolute max-[767px]:relative w-fit mt-4 top-0 right-0 items-center bg-green px-2 py-1 rounded-full text-[0.8rem] font-bold">
                            <FeaturedPostIcon />
                            <span className="ml-2">FEATURED</span>
                        </div>
                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>The hidden dangers of JSONs: Hunger silenced</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold">9 min read</span>
                                </div>
                                <div className="flex ml-4 items-center cursor-pointer">
                                    <SeriesIcon />
                                    <div className="ml-2 font-bold text-accent">
                                        <span>Security</span>
                                    </div>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                Previously on... In my previous blog post, I wrote about deserialization attacks and how to prevent them. I ended the post with a section called Hunger. There I stated I still doubted the link between…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">dotne.Kreibbels.me</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">21 hours ago</span>
                        </div>
                        <Image src={thumb1} alt="thumbnail" width={284} height={149} className={" ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">Security</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">Json</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">25</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar15} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">Deven Jarvis</span>
                                    <div className="flex ml-1">
                                        <span className="font-bold text-gray_shade cursor-pointer">for</span>
                                        <Image src={HostBlogIcon} alt="host blog icon" width={24} height={24} className="mx-1 cursor-pointer" />
                                        <span className="font-bold cursor-pointer">Sundew Blog</span>
                                    </div>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">sundew.hashnode.dev</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">Mar 24, 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer flex absolute max-[767px]:relative w-fit mt-4 top-0 right-0 items-center bg-green px-2 py-1 rounded-full text-[0.8rem] font-bold">
                            <FeaturedPostIcon />
                            <span className="ml-2">FEATURED</span>
                        </div>
                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>Introducing a Powerful New Way To Write Test In Python</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold">9 min read</span>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                TL;DR - I just released the first version of a new kind of testing framework, called Sundew. It&apos;'s early days, but if you&apos;'re ready to try something new in the world of testing, you should check it out!…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">sundew.hashnode.dev</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">Mar 24, 2023</span>
                        </div>
                        <Image src={thumb2} alt="thumbnail" width={284} height={149} className={"ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">Python</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">Testing</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+1</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1 flex">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">18</span>
                            </div>
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <CommentsIcon />
                                <span className="ml-2">1</span>
                            </div>
                            <div className="flex items-center cursor-pointer px-2 py-1 rounded-full">
                                <Image src={blogAvatar1} alt="blog avatar" width={31} height={31} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[20px] py-[24px] bg-[#cefffe10]">
                    <div className="">
                        <div className="flex justify-between items-center">
                            <div className="flex items-end">
                                <span className="mr-2">Recommended blogs for you</span>
                                <RecommendedBlogIcon />
                            </div>
                            <span className="text-accent hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">See more</span>
                        </div>
                        <div className="grid grid-cols-2 max-[767px]:grid-cols-1 gap-[20px] mt-[20px]">
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar16} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar17} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar18} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar20} alt="avatar" width={44} height={44} className="rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className="cursor-pointer">The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar21} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">Tapas Adhikary</span>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">blog.greenroot.info</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">3 hours ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>How to Create a Self-Clicking Button with ReactJS?</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold">4 min read</span>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                What is a Self-Clicking Button?
                                HTML has a button tag to create a clickable button element. You can attach an event handler to it to define an action to perform when users click on the button.
                                butt…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">blog.greenroot.info</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">3 hours ago</span>
                        </div>
                        <Image src={thumb3} alt="thumbnail" width={284} height={149} className={"ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">React</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">JavaScript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1 flex">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">13</span>
                            </div>
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <CommentsIcon />
                                <span className="ml-2">2</span>
                            </div>
                            <div className="flex items-center cursor-pointer px-2 py-1 rounded-full">
                                <Image src={blogAvatar1} alt="blog avatar" width={31} height={31} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar22} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">Salawu Ahmed</span>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">asally.hashnode.dev</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">an hour ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>Comments in JavaScript</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold">4 min read</span>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                Hello everyone 👋🏾 Welcome, in today&apos;’s post we&apos;’ll be learning about comments in JavaScript. We would learn how, when and where to write comments and some of the best practices when writing comments a…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">asally.hashnode.dev</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">an hour ago</span>
                        </div>
                        <Image src={thumb4} alt="thumbnail" width={284} height={149} className={" ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">JavaScript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">Web Development</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1 flex">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">10</span>
                            </div>
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <CommentsIcon />
                                <span className="ml-2">1</span>
                            </div>
                            <div className="flex items-center cursor-pointer px-2 py-1 rounded-full">
                                <Image src={avatar23} alt="blog avatar" width={31} height={31} className="rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar24} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">TK Vishal</span>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">vishaltk.hashnode.dev</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">16 hours ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>Hacking Shared Mutable React Refs and Solving Realtime Performance Issues Inspired by Making Games</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer flex-wrap">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold mr-4">5 min read</span>
                                    <div className="flex  items-center cursor-pointer ">
                                        <div>
                                            <SeriesIcon />
                                        </div>
                                        <div className="ml-2 font-bold text-accent">
                                            <span>Hacking React Refs</span>
                                            <span>Solving Realtime Performance Issues Inspired By Making Games</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                While optimizing React performance is often a matter of breaking down complex data structures or using memoization and useCallback, there are some cases very specific use cases where performance becom…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">asally.hashnode.dev</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">an hour ago</span>
                        </div>
                        <Image src={thumb5} alt="thumbnail" width={284} height={149} className={"ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">React</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">Javascript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1 flex">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">28</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[20px] py-[24px] bg-[#cefffe10]">
                    <div className="">
                        <div className="flex justify-between items-center">
                            <div className="flex items-end">
                                <span className="mr-2">Recommended blogs for you</span>
                                <RecommendedBlogIcon />
                            </div>
                            <span className="text-accent hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">See more</span>
                        </div>
                        <div className="grid grid-cols-2 max-[767px]:grid-cols-1 gap-[20px] mt-[20px]">
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar16} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar17} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar18} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar20} alt="avatar" width={44} height={44} className="rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className="cursor-pointer">The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar18} alt="avatar" width={44} height={44} className="cursor-pointer rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className='cursor-pointer'>The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-component_background border border-border rounded-lg px-4 py-4">
                                <div className="flex items-center">
                                    <Image src={avatar20} alt="avatar" width={44} height={44} className="rounded-full hover:opacity-80" />
                                    <div className="ml-2">
                                        <div className="cursor-pointer">The Erin</div>
                                        <div className="cursor-pointer text-[0.8rem] text-gray_shade">the-erin.hashnode.dev</div>
                                    </div>
                                </div>

                                <div className="cursor-pointer border p-1 rounded-full border-border hover:bg-[#ffffff10]">
                                    <RecommendedPlusIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar25} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">Jeevan</span>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">linutic.hashnode.dev</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">3 hours ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>Learning React by Creating Note Apps</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer flex-wrap">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold mr-4">6 min read</span>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                We&apos;'re going to create a full-stack react application with CRUD features, in a series of blogs. In this blog, we will learn to create a basic front end for our application.Before starting out, let&apos;'s t…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">linutic.hashnode.dev</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">3 hours ago</span>
                        </div>
                        <Image src={thumb6} alt="thumbnail" width={284} height={149} className={" ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">React</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">JavaScript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1 flex">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar26} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">MD Jamil Kashem Porosh</span>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">mdjamilkashemporosh.hashnone.dev</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">4 hours ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>Best Practices For Avoiding Memory Leaks in JavaScript</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer flex-wrap">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold mr-4">3 min read</span>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                Memory leaks in JavaScript can be a common problem that can cause your application to slow down or even crash. In this blog post, I will discuss some of the best practices for avoiding memory leaks in…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:flex-wrap max-[767px]:mt-6 hidden ">
                            <span className="cursor-pointer">mdjamilkashemporosh.hashnone.dev</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">4 hours ago</span>
                        </div>
                        <Image src={thumb7} alt="thumbnail" width={284} height={149} className={" ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">JavaScript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">typeScript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>
                        <div className="max-[767px]:my-1 flex">
                            <div className="flex items-center hover:bg-[#ffffff20] cursor-pointer px-2 py-1 rounded-full">
                                <LoveIcon />
                                <span className="ml-2">2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-[20px] py-[20px] border-y-[1px] border-border">
                    <div className="flex relative max-[767px]:flex-col ">
                        <div className="flex items-center   ">
                            <Image src={avatar27} alt="avatar" width={48} height={48} className=" cursor-pointer mr-4 w-[48px] h-[48px] rounded-full" />
                            <div className="">
                                <div className="flex">
                                    <span className="cursor-pointer font-bold">Karol Kozer</span>
                                </div>
                                <div className="text-gray_shade flex items-center max-[767px]:hidden">
                                    <span className="cursor-pointer">worldofreact.hashnode.dev</span>
                                    <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                                    <span className="cursor-pointer">an hour ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-[16px] flex max-[767px]:flex-col ">
                        <div>
                            <h3 className={cn(jakarta.className, "cursor-pointer text-[1.5rem] font-semibold")}>Schedule / Timeline for React with Planby 2.2.3</h3>
                            <div className="flex">
                                <div className="flex items-center cursor-pointer flex-wrap">
                                    <ReadIcon />
                                    <span className="ml-2 font-bold mr-4">3 min read</span>
                                </div>
                            </div>
                            <p className="cursor-pointer text-gray_shade">
                                Hello readers! Planby is a component for a quick implementation of Schedules, Timelines, Electronic Program Guide, Conference / Calendar Planner, Music Events and many more ideas. It uses a custom vir…
                            </p>
                        </div>
                        <div className="text-gray_shade items-center max-[767px]:flex max-[767px]:mt-6 hidden">
                            <span className="cursor-pointer">worldofreact.hashnode.dev</span>
                            <div className="w-1 h-1 rounded-full bg-gray_shade mx-2"></div>
                            <span className="cursor-pointer">an hour ago</span>
                        </div>
                        <Image src={thumb8} alt="thumbnail" width={284} height={149} className={" ml-4 max-[767px]:ml-0 max-[767px]:mt-4 max-[767px]:w-full max-[767px]:h-[50vw] object-fit rounded-lg h-[149px] cursor-pointer"} />
                    </div>
                    <div className="flex justify-between items-center max-[767px]:flex-col-reverse max-[767px]:items-start">
                        <div className="flex items-center">
                            <div className="p-[10px] hover:bg-[#ffffff20] cursor-pointer rounded-full">
                                <BookmarkIcon />
                            </div>
                            <div className="ml-2">
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">React</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">JavaScript</span>
                                <span className="hover:bg-[#ffffff20] hover:text-white text-gray_shade cursor-pointer border border-border px-2 py-1 mx-1 rounded-lg">+3</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}