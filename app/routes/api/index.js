const express = require('express');
const electionRoutes = require('./election');
const userRoutes = require('./user');
const voteRoutes = require('./vote');
const errors = require('../../errors');

const router = express.Router();

router.use('/election', electionRoutes);
router.use('/user', userRoutes);
router.use('/alternative', electionRoutes);
router.use('/vote', voteRoutes);

router.use((req, res, next) => {
  const error = new errors.NotFoundError(req.originalUrl);
  next(error);
});

router.use((err, req, res, next) => {
  errors.handleError(res, err);
});

module.exports = router;
