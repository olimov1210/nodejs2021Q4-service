import * as tasksRepo from '../task/task.memory.repository';
import Board from './board.model';

let boards: Board[] = [{"id": "16ea58ac-f0f9-4dca-8462-001e6c610956","title": "board title", "columns": [],}];

/**
 *  Returns all board objects
 */
export const getAll = () => boards;

/**
 *  Returns the board with given id
 */
export const getById = (id: string) => boards.find((el) => el.id === id);

/**
 * Creates new board and pushes it to array
 *  Returns the newly created board
 */
export const create = (board: Board) => {
  boards.push(board);
  return board;
};

/**
 * Updates the existing board obj with new values
 *  Returns the updated board
 */
export const update = (id: string, data: Board) => {
  const boardIndex = boards.findIndex((el) => el.id === id);
  return Object.assign(boards[boardIndex], data);
};

/**
 * Deletes the board by id
 */
export const remove = (id: string) => {
  boards = boards.filter((el) => el.id !== id);
  tasksRepo.removeBoard(id);
};
