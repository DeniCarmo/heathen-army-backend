import { UserModel } from "../../models/UserSchema.js";
import { hashPassword } from "../../utils/bcryptHelpers.js";

const  RegisterUserController = async (req, res) => {
  switch (true) {
    case !req.body.username:
      return res.status(400).send({ message: "The field 'username' is required." });
    case !req.body.email:
      return res.status(400).send({ message: "The field 'email' is required." });
    case !req.body.password:
      return res.status(400).send({ message: "The field 'password' is required." });
    case !req.body.role:
      return res.status(400).send({ message: "The field 'role' is required." });
    default:
      break;
  }

  const { username, email, password, role } = req.body;

  const isUsername = await UserModel.findOne({'username': username});
  if (isUsername) return res.json({ message: 'Username already exists.' });

  const isEmail = await UserModel.findOne({'email': email});
  if (isEmail) return res.json({ message: 'E-mail already registered.' });

  const hashedPass = await hashPassword(password);

  const user = {
    username,
    email,
    password: hashedPass,
    role
  };

  const response = await UserModel.create(user);

  return res.status(201).json({ username: response.username, email: response.email, password: response.password, role: response.role });
}

export { RegisterUserController };