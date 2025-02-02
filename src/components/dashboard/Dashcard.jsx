"use client";
import Link from "next/link";

export default function DashCoursesCard({title, members, href}) {
    return (
        <>
            <Link
                href={href}
                className="hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-[10px] transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer h-[50px] sm:h-[100px] md:h-[100px] lg:h-[100px] max-w-[400px] md:w-[330px] relative flex flex-col justify-start group object-cover overflow-hidden mx-3 my-3 z-20">
                <div className="relative flex flex-col items-center">
                    {/* title div */}
                    <h2 className="sm:text-2xl lg:text-2xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text p-3">{title}</h2>

                    {/* content div */}
                    <div className="p-4 sm:p-5">
                        <p className="text-white font-sans font-extralight sm:text-xs md:text-sm text-xs line-clamp-2">{members} members enrolled</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
