const { Router } = require('express');
const notesRouter = require('./notes');
const categoriesRouter = require('./categories');
const usersRouter = require('./users');

const router = Router();

router.get('/hc', (_, res) => { res.status(200).send('OK') });
router.use('/notes', notesRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);

module.exports = router;