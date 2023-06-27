import { type Response } from 'express'
import { type RequestExt } from '../types/requestExt'
import { errorHandler } from '../utils/error.handler'
import * as servFn from '../services/project.services'
export const getProject = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const servResponse = await servFn.getProjectServ(id)
    res.status(200).send(servResponse)
  } catch (error) {
    errorHandler('error get project', res, error)
  }
}
export const getProjects = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const userId = req.query.userId as string
    const servResponse = await servFn.getProjectsServ(userId)
    res.status(200).send(servResponse)
  } catch (error) {
    errorHandler('error get projects', res, error)
  }
}
export const postProject = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const newProject = req.body
    const servResponse = await servFn.postProjectServ(newProject)
    res.status(200).send(servResponse)
  } catch (error) {
    errorHandler('error post project', res, error)
  }
}
export const putProject = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const newProjectData = req.body
    const servResponse = await servFn.putProjectServ(id, newProjectData)
    res.status(200).send(servResponse)
  } catch (error) {
    errorHandler('error put project', res, error)
  }
}
export const deleteProject = async (req: RequestExt, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const servResponse = await servFn.deleteProjectServ(id)
    res.status(200).send(servResponse)
  } catch (error) {
    errorHandler('error delete project', res, error)
  }
}
