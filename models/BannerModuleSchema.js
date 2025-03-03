import mongoose from 'mongoose';
import { BannerModel } from './BannerSchema.js';

const BannerModuleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    activePeriod: {
      start: {
        type: Date,
        required: false
      },
      end: {
        type: Date,
        required: false,
        validate: {
          validator: function (value) {
            return value > this.activePeriod.start;
          },
          message: 'A data de término deve ser maior que a data de início.'
        }
      }
    },
    hash: {
      type: String,
      required: true
    },
    banners: [
      {
        type: BannerModel.schema,
        required: false
      }
    ]
  },
  { timestamps: true }
);

export const BannerModuleModel = mongoose.model('BannerModule', BannerModuleSchema);