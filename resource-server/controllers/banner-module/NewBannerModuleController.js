import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const NewBannerModuleController = async (req, res) => {
  if (!req.body.name) return res.status(400).send({ message: "The 'name' field is required." });

  const newBannerModule = req.body;
  const response = await BannerModuleModel.create(newBannerModule);

  console.log('Response', response);

  return res.status(201).send({ message: 'New Banner Module added successfully.' });
};

export { NewBannerModuleController };