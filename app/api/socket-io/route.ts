import {Server as IOServer} from "socket.io"
import {Server as HTTPServer} from "http";

import type {NextApiResponseWithSocket} from "@/types/socket"
import type { NextApiRequest } from "next";

export const SocketIOHandler = (req:NextApiRequest, res:NextApiResponseWithSocket) => {
    if(!res.socket.server.io){
        console.log("Initializing socket connection");

        const httpServer: HTTPServer = res.socket.server.io as any;
        const io = new IOServer(httpServer, {
            path: "/api/socket-io"
        })
    }
}