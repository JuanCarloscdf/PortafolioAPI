import { Schema, model } from 'mongoose'
import { type ProjectInput } from '../types/project.types'

const projectSchema = new Schema<ProjectInput>({
  userId: { type: String, required: true },
  gitLink: { type: String },
  cards: {
    type: [{
      title: String,
      description: String,
      img: String
    }]
  }
}, {
  timestamps: true
})

export default model('Project', projectSchema)
