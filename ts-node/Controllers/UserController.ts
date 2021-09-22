import { Request, Response } from "express";
export const usersIndex = (req: Request, res: Response) => {
    res.json({
        data: "user",
    });
};

export const userShow = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        data: "show users",
        id,
    });
};

export const userPost = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        data: "show users",
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
