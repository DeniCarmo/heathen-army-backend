import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const DeleteBannerItemController = async (req, res) => {
  const {id} = req.params;
  const bannerId = req.query.item;

  if (!bannerId) return res.status(400).json({ message: 'Banner ID is required as a query parameter (item).' });

  const bannerModule = await BannerModuleModel.findById(id);

  if (!bannerModule) return res.status(404).send({ message: 'Banner module not found.' });

  const bannerRemoved = bannerModule.banners.filter(item => item._id.toString() !== bannerId);

  bannerModule.banners = bannerRemoved;

  const updatedBannerModule = await BannerModuleModel.findByIdAndUpdate(id, bannerModule);

  if (!updatedBannerModule) return res.status(404).json({ message: 'Banner module not found.' });

  return res.status(200).send({ message: 'Banner updated successfully.' });
};

export { DeleteBannerItemController };