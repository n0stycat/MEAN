export interface User {
  email: string,
  password: string
}

// "?" since backend creates those fields
// so frontend dont know about them at the time of creation

export interface Category {
  name: string
  imageSrc?: string
  user?: string
  _id?: string
}
