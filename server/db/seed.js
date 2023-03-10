// Load env variables
import 'dotenv/config'
import './connection.js'

import User from '../models/users.js'
import Post from '../models/posts.js'
import mongoose from 'mongoose'

await User.deleteMany()
await Post.deleteMany()

const myself = await User.create({
  username: 'Sam Zanca',
  handle: 'metruzanca',
  posts: []
})

await Post.insertMany([
  {
    text: 'Run `"ba" + +"a" + "a"` in the browser console and you get 🍌',
    date: '2023-03-03T16:16:08.888Z',
    author: myself._id,
  },
  {
    text: 'TIL you can restart nodemon by typing `rs` and hitting enter',
    date: '2023-03-07T16:16:08.888Z',
    author: myself._id,
  },
  {
    text: 'Typescript > Javascript\nChange my mind.',
    date: '2023-03-08T16:16:08.888Z',
    author: myself._id,
  },
  {
    text: 'Rust will be the future of programming languages',
    date: '2023-03-09T16:16:08.888Z',
    author: myself._id,
  }
])

const stephen = await User.create({
  username: "Stephen Decatur",
  handle: 'stvndctr',
  posts: []
})

await Post.insertMany([
  {
    text: 'What year is it? I feel like I\'m in the wrong century...',
    author: stephen._id,
    date: '2023-03-01T16:16:08.888Z',
  },
  {
    text: 'Anyone know how to find the North Star?',
    author: stephen._id,
    date: '2023-03-04T16:16:08.888Z',
  },
  {
    text: 'Damn the torpedoes',
    author: stephen._id,
    date: '2023-03-09T16:16:08.888Z',
  },
])

await mongoose.disconnect()