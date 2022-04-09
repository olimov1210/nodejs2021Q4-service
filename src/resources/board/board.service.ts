import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

/**
 *  Returns Resolved Promise of all board objects
 */
export const getAll = () => Promise.resolve(boardsRepo.getAll());

/**
 *  Returns Resolved Promise of the board with given id
 */
export const getById = (id: string) => Promise.resolve(boardsRepo.getById(id));

/**
 * Passes new board obj to create function
 *  Returns Resolved Promise of the newly created board
 */
export const create = (boardData: Board) => {
  const board = new Board({ ...boardData });
  return Promise.resolve(boardsRepo.create(board));
};

/**
 * Passes updating board obj to update function
 *  Returns Resolved Promise of the updated board
 */
export const update = (id: string, data: Board) =>
  Promise.resolve(boardsRepo.update(id, data));

/**
 * Passes removing board id to removing function
 *  Returns Resolved Promise that returns void
 */
export const remove = (id: string) => Promise.resolve(boardsRepo.remove(id));
