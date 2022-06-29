const Router = require('express');
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require('../middleware/authMiddleware.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.post('/giveScore', checkRole('Администратор'), userController.giveScore);

module.exports = router;