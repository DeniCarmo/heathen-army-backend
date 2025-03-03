import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const GetBannerModuleController = async (req, res) => {
  const {id} = req.params;
  const bannerModule = await BannerModuleModel.findOne({'hash': id});
  const banners = await bannerModule.banners.map(banner => {
    return (
      {
        title: banner.title,
        img: banner.img,
        alt: banner.alt,
        link: banner.link
      }
    )
  });
  const bannerObj = {
    name: await bannerModule.name,
    banners
  }
  return bannerModule ?
  res.status(200).json({ 
    name: bannerObj.name,
    banners: bannerObj.banners
   }) :
  res.status(404).json({ message: "Invalid banner id." });
};

export { GetBannerModuleController };