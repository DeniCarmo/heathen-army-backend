import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const GetBannerItemController = async (req, res) => {
  const {id} = req.params;
  const bannerId = req.query.item;

  if (!bannerId) return res.status(400).json({ message: 'Banner ID is required as a query parameter (item).' });

  const bannerModule = await BannerModuleModel.findById(id);
  
  if (!bannerModule) return res.status(404).send({ message: 'Banner module not found.' });

  const foundBanner = bannerModule.banners.find(item => item._id.toString() === bannerId);

  if (!foundBanner) return res.status(404).send({ message: 'Banner not found.' });

  return res.status(200).json({foundBanner});
};

export { GetBannerItemController };