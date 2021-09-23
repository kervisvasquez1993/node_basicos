import { Request, Response } from "express";
import User from "../model/User";
export const usersIndex = async(req: Request, res: Response) => {
    const user = await User.findAll();
    
    res.json({
        data: user,
    });
};

export const userShow = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        data: "show de usar",
        id,
    });
};

export const userPost = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        data: "post de user",
        body,
    });
};

export const userUpdate = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        data: "update update",
        body,
        id,
    });
};

export const userDelete = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        data: "delete update",
        id,
    });
};
