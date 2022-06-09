const {User} = require('../models/models');

class UserController {

    async register(req, res) {
        const {id,
            name,
            сategories,
            score,
            position} = req.body;

        const user = await User.create({id,
            name,
            сategories,
            score,
            position});

        return res.json(user);
    };

    async login(req, res) {
        const {id,
            name,
            сategories,
            score,
            position} = req.body;

        const user = await User.create({id,
            name,
            сategories,
            score,
            position});

        return res.json(user);
    };

    async getInfo(req, res) {
        //const user = await User.findOne({ where: {id: 295433957}});
        //return res.json('user');
        const query = req.query;
        res.json(query);
    }
};

module.exports = new UserController();