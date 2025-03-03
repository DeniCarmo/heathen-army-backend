import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const UpdateBannerModuleController = async (req, res) => {
  if (!req.body.name) return res.status(400).send({ message: "The 'name' field is required." });

  const {id} = req.params;
  const bannerModule = await BannerModuleModel.findByIdAndUpdate(id, req.body);

  if (!bannerModule) return res.status(404).json({ message: 'No item matches the id.' });

  return res.status(200).send({ message: 'Banner updated successfully.' });
};

export { UpdateBannerModuleController };