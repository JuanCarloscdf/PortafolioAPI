
export interface CardType {
  title: string
  description: string
  img: string
}
export interface ProjectInput {
  userId: string
  gitLink: string
  cards: CardType[]
}

export interface ProjectDocument extends ProjectInput {
  _id?: string
  createdAt: Date
  updatedAt: Date
}
