"use client";

import { useState } from "react";
import AdoptMe from "./AdoptMe";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const AdoptMeButton = ({ pet }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const userinfo = authClient.useSession();
    const user = userinfo?.data?.user;

    const handleAdoptMeClick = () => {
        if (!user) {
             toast.error("Please login first");
            router.push("/signin");
            return;
        }
        setIsOpen(true);
    };

    return (
        <>
            <button href='#' className='px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600  hover:scale-105 transition cursor-pointer' onClick={handleAdoptMeClick}>Adopt Me</button>
            <AdoptMe pet={pet}
                user={user}
                isOpen={isOpen}
                setIsOpen={setIsOpen} />

        </>
    );
};

export default AdoptMeButton;