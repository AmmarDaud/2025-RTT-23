/**
 * Returns all users
 * @param {*} req
 * @param {*} res
 */
export const getAllUsers = (req, res) => {
  const users = [{ id: 1, name: "John Doe" }];
  res.json(users);
};

export const createUser = (req, res) => {
  res.status(201).json({ message: "User created successfully" });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  res.json({ user: { id: id, name: "John Doe" } });
};