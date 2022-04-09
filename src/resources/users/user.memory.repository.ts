import User from './user.model';

let users: User[] = [{ "name":"Alish","id": "04f7d8f4-05bc-48a5-b6e8-4fe1c3038fe9", "login": "Oknov", "password": "testpassword" }];

/**
 * Get all the users */
export const getAll = () => users;

/**
 * Get the user by id */
export const getById = (id: string) => users.find((el) => el.id === id);

/**
 * Create a new user */
export const create = (user: User) => {
    users.push(user);
    return user;
};

/**
 * Update the user by id */
export const update = (id: string, data: User) => {
    const userIndex = users.findIndex((el) => el.id === id);
    return Object.assign(users[userIndex], data);
};
/**
 * Deletes the user by id */
export const remove = (id: string) => {
    users = users.filter((el) => el.id !== id);
  };
