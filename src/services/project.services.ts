import Project from '../models/project.model'
import { servErrorHandler } from '../utils/services.error.handler'
import { type ProjectInput } from '../types/project.types'
export const getProjectServ = async (id: string): Promise<any> => {
  try {
    const dbResponse = await Project.findById(id)
    return dbResponse
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
export const getProjectsServ = async (userId: string): Promise<any> => {
  try {
    const dbResponse = await Project.find({ userId })
    return dbResponse
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
export const postProjectServ = async (newProject: ProjectInput): Promise<any> => {
  try {
    console.log('newProject :>> ', newProject)
    const dbResponse = await Project.create(newProject)
    const toSend = {
      message: 'new project added',
      data: dbResponse
    }
    return toSend
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
export const putProjectServ = async (id: string, newProjectData: ProjectInput): Promise<any> => {
  try {
    const dbResponse = await Project.findByIdAndUpdate(id, newProjectData)
    return dbResponse
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
export const deleteProjectServ = async (id: string): Promise<any> => {
  try {
    const dbResponse = await Project.findByIdAndDelete(id)
    return dbResponse
  } catch (error) {
    const servError = servErrorHandler(error)
    return servError
  }
}
