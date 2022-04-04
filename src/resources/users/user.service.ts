import * as usersRepo from './user.memory.repository';

export const getAll = () => Promise.resolve(usersRepo.getAll());
