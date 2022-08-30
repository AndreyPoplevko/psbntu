const User = require('../models/models');
const ApiError = require('../error/ApiError.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, name, сategories, score, role) => {
    return jwt.sign({id, name, сategories, score, role}, process.env.SECRET_KEY)
}

class UserController {

    async register(req, res, next) {
        const {id, name, password, сategories, score, role} = req.body;
        if(!id || !name || !password) {
            return next(ApiError.badRequest('Данные в одном из полей отсутствуют!'))
        };
        const candidate = await User.findOne({where: {id}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким № билета уже существует!'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({id, name, password: hashPassword, сategories, score, role});
        const token = generateJwt(id, name, сategories, score, role)
        return res.json({token});
    };

    async login(req, res, next) {
        const {id, password} = req.body;
        if(!id || !password) {
            return next(ApiError.badRequest('Данные в одном из полей отсутствуют!'))
        };
        const user = await User.findOne({where: {id}});
        if (!user) {
            return next(ApiError.internal('Пользователь с таким № билета не найден!'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль!'))
        }
        console.log(user)
        const token = generateJwt(id, user.dataValues.name, user.dataValues.categories, user.dataValues.score, user.dataValues.role);
        return res.json({token});
    };

    //async check(req, res, next) {
    //    const token = generateJwt(req.user.id, req.user.name, req.user.categories, req.user.score, req.user.role);
    //    return res.json({token});
    //};

    async giveScore(req, res, next) {
        const {id, updatedScore} = req.body;
        if(!id || !updatedScore) {
            return next(ApiError.badRequest('Данные в одном из полей отсутствуют!'))
        };
        const user = await User.findOne({where: {id}});
        if (!user) {
            return next(ApiError.internal('Пользователь с таким № билета не найден!'))
        }
        await User.update({score: user.score += updatedScore}, {where: {id}})
        return res.json({user})
    };
    
    async updateUser(req, res, next) {
        const {id} = req.body
        if (id) {
            const user = await User.findOne({where: {id}});
            if (user) {
                const token = generateJwt(id, user.dataValues.name, user.dataValues.categories, user.dataValues.score, user.dataValues.role);
                return res.json({token});
            }
            else {
                return res.json({})
            }
        }
    }

    async generalUsersScore(req, res, next) {
        const usersScore = await User.findAll();
        return res.json(usersScore);
    }
};

module.exports = new UserController();