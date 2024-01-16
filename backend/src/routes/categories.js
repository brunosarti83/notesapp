const { Router } = require('express');
const postCategory = require('../controllers/categories/postCategory');
const getCategories = require('../controllers/categories/getCategories');
const getCategoryById = require('../controllers/categories/getCategoryById');
const patchCategoryById = require('../controllers/categories/patchCategoryById');
const deleteCategoryById = require('../controllers/categories/deleteCategoryById');


const categoriesRouter = Router();

categoriesRouter.post('/', postCategory);
categoriesRouter.get('/', getCategories);
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.patch('/:id', patchCategoryById);
categoriesRouter.delete('/:id', deleteCategoryById);


module.exports = categoriesRouter;