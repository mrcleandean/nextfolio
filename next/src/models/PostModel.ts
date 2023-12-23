import { Schema, model, models } from "mongoose";
import type { PostType } from "demdevvyshared/models";


const trimExtraSpaces = (value: string) => value.replace(/\s\s+/g, " ").trim();

const postSchema = new Schema<PostType>({
  admin: { type: Boolean, default: false },
  title: {
    type: String,
    minLength: [7, "The title must be at least 7 characters long."],
    maxLength: [45, "The title cannot exceed 45 characters."],
    default: "Untitled",
    set: trimExtraSpaces,
  },
  username: {
    type: String,
    default: "Anonymous",
    set: trimExtraSpaces,
  },
  content: {
    type: String,
    maxLength: 5000,
    default: "",
  },
  dateTime: {
    type: Date,
    default: () => Date.now(),
  },
  score: {
    type: Number,
    default: 0,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    default: null,
  },
  children: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

postSchema.pre("validate", function (next) {
  if (this.isNew || this.isModified("title") || this.isModified("username") || this.isModified("content")) {
    if (typeof this.title === "string" && !this.title.trim()) {
      this.title = "Untitled";
    }
    if (typeof this.username === "string" && !this.username.trim()) {
      this.username = "Anonymous";
    }
    if (typeof this.content === "string" && !this.content.trim()) {
      this.content = "";
    }
  }
  next();
});

// Add indexing for faster queries
postSchema.index({ dateTime: -1 });
postSchema.index({ score: 1 });
postSchema.index({ score: -1 });
const Post = models.Post || model<PostType>("Post", postSchema);

export default Post;
