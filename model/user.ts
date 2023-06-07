import { Schema,model, Document } from "mongoose"

interface user extends Document{
  email: string;
  password: string
  pic: string
}

const userSchema = new Schema<user> ({
  email: { type: String, required: true, unique:true },
  password: {type: String, required: true},
  pic: {
    type: "String",
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
},{timestamps:true})

export const User = model<user>('User', userSchema);


