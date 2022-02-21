const express = require('express');
const router = express.Router();
const dsCategories_Ctrl = require('../../controllers/dashboard/dsCategories_Ctrl');

router.get('/', dsCategories_Ctrl.listAll);
router.get('/:id', dsCategories_Ctrl.listOne);
router.post('/update/:id', dsCategories_Ctrl.updateCategorie);
router.post('/delete/:id', dsCategories_Ctrl.deleteCategorie);
router.post('/create', dsCategories_Ctrl.createCategorie);

module.exports = router;