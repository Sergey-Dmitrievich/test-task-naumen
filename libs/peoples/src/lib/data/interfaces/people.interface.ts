export interface IUser{
  id: number
  name: string
  email: string
  active: boolean
}

export type FilterStatus = 'all' | 'active' | 'inactive';
