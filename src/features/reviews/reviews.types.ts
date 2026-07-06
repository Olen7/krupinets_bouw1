export interface ReviewAttributes {
  username: string
  text: string
  grade: number
  updatedAt: string
}

export interface Review {
  id: number
  username: string
  text: string
  grade: number
  updatedAt: string
}

export interface SubmitReviewInput {
  username: string
  text: string
  grade: number
}
