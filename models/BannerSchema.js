import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
  src: {
    type: String,
    required: true
  }
});

const BannerSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      desktop: {
        type: ImageSchema,
        required: true
      },
      mobile: {
        type: ImageSchema,
        required: true
      }
    },
    alt: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

export const BannerModel = mongoose.model('Banner', BannerSchema);