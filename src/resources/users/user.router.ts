import express from 'express';
import User from './user.model';
import * as usersService from './user.service';

const router = express.Router();

router.route('/users').get((req, res) => {
  usersService
    .getAll()
    .then((users) => res.json(users.map(User.toResponse)))
    .catch((e) => res.status(400).json({ message: e.message }));
});

export default router;