import {User, MessageCircle,LogOut, Home} from "lucide-react"
import Link from "next/link"

export default function SideBar(){
    return(
        <div className="bg-stone-600 min-h-screen p-2 min-w-[30px] flex flex-col gap-50">
            <div className="flex flex-col gap-5 mt-10">
                <div className="p-2">
                    <Home size={28} className="text-white cursor-pointer hover:text-black"/>
                </div>
                <div className="p-2">
                    <User size={28} className="text-white cursor-pointer hover:text-black"/>
                </div>
                <Link href="/pages/chat-page">
                <div className="p-2">
                    <MessageCircle size={28} className="text-white cursor-pointer hover:text-black"/>
                </div>
                </Link>
            </div>
            <div className="p-2">
                <LogOut size={28} className="text-white cursor-pointer hover:text-black"/>
            </div>
        </div>
    )
}