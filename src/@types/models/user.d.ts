interface UserDBO {
  id: string
  name: string
  email: string
  password: string
  lastName: string
  createdAt: Date
  updatedAt: Date
  faculty: string
  career: string
  courses: Array<string>
}
