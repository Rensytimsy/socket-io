import {Server as IOServer} from "socket.io";
import {Server as HTTPServer} from "http";
import type { NextApiRequest } from "next";
import type { NextApiResponseWithSocket } from "@/types/socket";

export const SocketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
    if(!res.socket.server.io){
        const httpServer: HTTPServer = res.socket.server.io as any;
        //Below is an instance of socket.io initialized if it was not existing
        const io = new IOServer(httpServer, {
            path: " "
        });

        res.socket.server.io = io

    }
    res.end();
}