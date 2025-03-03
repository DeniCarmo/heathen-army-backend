import { BannerModuleModel } from "../../../models/BannerModuleSchema.js";

const NewBannerItemController = async (req, res) => {
  const {id} = req.params;
  
  switch (true) {
    case !req.body.title:
      return res.status(400).send({
        message: "The 'title' field is required."
      });
    case !req.body.img.desktop:
      return res.status(400).send({
        message: "The 'desktop' field is required."
      });
    case !req.body.img.mobile:
      return res.status(400).send({
        message: "The 'mobile' field is required."
      });
    default:
      break;
  }
  
  const bannerModule = await BannerModuleModel.findById(id);

  if (!bannerModule) return res.status(404).send({ message: 'Banner module not found.' });

  const newBanner = {...req.body};

  bannerModule.banners.push(newBanner);

  const updatedBannerModule = await BannerModuleModel.findByIdAndUpdate(id, bannerModule);

  if (!updatedBannerModule) return res.status(404).json({ message: 'Banner module not found.' });

  return res.status(201).send({ message: 'New banner added successfully.' });
};

export { NewBannerItemController };