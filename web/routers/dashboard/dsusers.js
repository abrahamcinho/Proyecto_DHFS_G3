const express = require('express');
const router = express.Router();
const dsUsers_Ctrl = require('../../controllers/dashboard/dsUsers_Ctrl');

router.get('/', dsUsers_Ctrl.listAll);
router.get('/:id', dsUsers_Ctrl.listOne);
router.put('/update/:id', dsUsers_Ctrl.updateUser);
router.delete('/delete/:id', dsUsers_Ctrl.deleteUser);
router.post('/create', dsUsers_Ctrl.createUser);

module.exports = router;