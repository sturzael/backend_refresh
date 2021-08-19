import express, { Request, Response } from 'express';
const {
  getChores,
  getSingleChore,
  createChore,
  updateChore,
  deleteChore
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('../controllers/chores');

const router = express.Router();

router.route('/').get(getChores).post(createChore);

router.route('/:id').get(getSingleChore).put(updateChore).delete(deleteChore);

module.exports = router;
