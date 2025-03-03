import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const DeleteBannerModuleController = async (req, res) => {
  const {id} = req.params;
  const result = await BannerModuleModel.findByIdAndDelete(id);

  if (!result) return res.status(404).json({ message: 'No item matches the id.' });

  return res.status(200).send({ message: 'Banner deleted successfully.' });
};

export { DeleteBannerModuleController };