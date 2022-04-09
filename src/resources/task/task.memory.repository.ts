import Task from './task.model';

const tasks: { [boardId: string]: Task[] } = {};

/**
 * Returns all tasks by board id
 */
export const getAllByBoardId = (boardId: string) => tasks[boardId];

/**
 *  Returns the task by id from board by id
 */
export const getByTaskId = (boardId: string, taskId: string) => {
  if (tasks[boardId]) return tasks[boardId].find((task) => task.id === taskId);
  return false;
};

/**
 * Creates new task and pushes it to board by id
 *  Returns a new task
 */
export const create = (boardId: string, task: Task) => {
  if (!tasks[boardId]) tasks[boardId] = [];
  tasks[boardId].push({ ...task, boardId });
  return task;
};

/**
 * Updates the existing task object from boardId  with new values
 *  Returns the updated task
 */
export const update = (boardId: string, taskId: string, data: Task) => {
  const taskIndex = tasks[boardId].findIndex((task) => task.id === taskId);
  return Object.assign(tasks[boardId][taskIndex], data);
};

/**
 * Deletes the task by id from board by id
 */
export const remove = (boardId: string, taskId: string) => {
  tasks[boardId] = tasks[boardId].filter((task) => task.id !== taskId);
};

/**
 * Deletes entire board by id
 */
export const removeBoard = (boardId: string) => {
  delete tasks[boardId];
};

/**
 * Assigns null to userId for task when user is deleted
 */
export const unassignUser = (userId: string) => {
  Object.keys(tasks).forEach((boardId) => {
    tasks[boardId].forEach((task) => {
      // eslint-disable-next-line no-param-reassign
      if (task.userId === userId) task.userId = null;
    });
  });
};