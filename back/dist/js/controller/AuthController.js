import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prismaPg from "..";
export default class AuthController {
    static async sign(req, res) {
        const { name, email, password } = req.body;
        console.log("🚀 ~ AuthController ~ sign ~ name, email, password:", name, email, password);
        const existEmail = await prismaPg.user.findUnique({ where: { email } });
        if (existEmail) {
            return res.json({ resp: "Esse email já está sendo usado!" });
        }
        try {
            const user = await prismaPg.user.create({ data: { name, email, password } });
            return res.status(200).json({ resp: "Success", data: { user } });
        }
        catch (err) {
            console.log(err);
            return res.json({ resp: "Ocorrou um error no servidor!" });
        }
    }
    static async login(req, res) {
        const { email, password } = req.params;
        console.log("🚀 ~ AuthController ~ login ~ email, password:", email, password);
        const user = await prismaPg.user.findUnique({ where: { email: email } });
        if (!user) {
            return res.json({ resp: "Email ou senha incorretos!" });
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.json({ resp: "Email ou senha incorretos!" });
        }
        try {
            const secret = process.env.SECRET;
            const secretRefresh = process.env.REFRESH;
            const token = jwt.sign({ id: user.id, }, secret, { expiresIn: "5m" });
            const refresh = jwt.sign({ id: user.id, }, secretRefresh, { expiresIn: "30m" });
            return res.status(200).json({ resp: "Success", data: { token: token, refresh: refresh, user: user } });
        }
        catch (error) {
            console.log(error);
            return res.json({ resp: "Ocorrou um error no servidor!" });
        }
    }
}
//# sourceMappingURL=AuthController.js.map