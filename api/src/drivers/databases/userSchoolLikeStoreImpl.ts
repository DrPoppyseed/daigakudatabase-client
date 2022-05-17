import { Document, model, Schema } from 'mongoose'
import { UserSchoolLike } from '../../models/UserSchoolLike'

const UserSchoolLikeSchema = new Schema<UserSchoolLike & Document>(
  {
    userId: String,
    ipeds_unitid: String,
  },
  { timestamps: true }
)

export default model<UserSchoolLike & Document>(
  'UserSchoolLike',
  UserSchoolLikeSchema
)
