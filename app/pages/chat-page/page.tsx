"use client"
import { useEffect } from "react"
import { SocketHandler } from "@/app/api/socket-io/route"
import { io } from "socket.io-client";

export default function ChatPage(){

    let socket;
    useEffect(() => {
        SocketInitializer();
    },[]);

    const SocketInitializer = async() => {

        await fetch("/api/socket-io");
        
        socket = io({
            path: "/api/socket-io"
        });

        socket.on("connection", (socket) => {
            console.log("Socket connected")
        })
    }

    return (
        <div>
            This the chat page
        </div>
    )
}