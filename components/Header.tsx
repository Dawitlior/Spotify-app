"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa"



import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { toast } from "react-hot-toast";

interface HeaderProps {
    children: React.ReactNode;
    className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();
    const authModal = useAuthModal();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        // reset any playing songs
        router.refresh();

        if (error) {
          toast.error(error.message)
        } else {
            toast.success('Logged out!')
        }

    }


    return (
        <div className={twMerge(` h-flt bg-gradient-to-b from-emerald-800 p-6 `, className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.back()}>
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.forward()}>
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-50 transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-50 transition">
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <button onClick={handleLogout} className="hover:opacity-50 text-white">
                                Log-out
                            </button>
                            <button 
                            onClick={() => router.push('/account')}
                            className="p-2"
                            >
                                <FaUserAlt />
                            </button>
                        </div>
                    ) : (


                        <>
                            <div>
                                <Button onClick={authModal.onOpen} className="bg-transparent text-neutral-300 font-medium">
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                                    Log in
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header