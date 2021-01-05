const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    authors: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    image: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    link: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },

  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
