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

await Post.create({
  text: 'Damn the torpedoes',
  author: stephen._id,
  date: '2023-03-09T16:16:08.888Z',
})

await mongoose.disconnect()