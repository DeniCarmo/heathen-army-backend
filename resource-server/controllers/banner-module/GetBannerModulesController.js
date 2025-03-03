import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const GetBannerModulesController = async (req, res) => {
  const allBanners = await BannerModuleModel.find({});

  if (!allBanners) return res.status(400).json({ message: 'No banner modules found.' });

  return res.status(200).json([ allBanners ]);
}

export { GetBannerModulesController };