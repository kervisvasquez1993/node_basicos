import { Request, Response } from "express";
import User from "../model/User";
export const usersIndex = async (req: Request, res: Response) => {
    const user = await User.findAll();

    res.json({
        data: user,
    });
};

export const userShow = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.json({ data: `No existe un asuario con el id ${id}` });
    }
    res.json({
        data: user,
        id,
    });
};

export const userPost = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existEmail = await User.findOne({
            where: { email: body.email },
        });
        if (existEmail) {
            return res
                .status(400)
                .json({ data: `ya existe un email con este` });
        }

        const user = await User.create(body);
        res.json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: `Hable con el admin`,
        });
    }
};

export const userUpdate = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                data: `El usuario con el id : ${id} no esta saociado a ningun usuario`,
            });
        }

        await user.update(body);

        res.json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: `Hable con el admin`,
        });
    }
};

export const userDelete = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                data: `El usuario con el id : ${id} no esta saociado a ningun usuario`,
            });
        }

        await user.update({status : false});

        res.json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: `Hable con el admin`,
        });
    }
};
