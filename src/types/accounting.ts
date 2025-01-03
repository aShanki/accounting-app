export type TransactionType = 'Income' | 'Expense'

export interface Location {
  _id?: string
  name: string
  balance: number
  createdAt: Date
  updatedAt: Date
}

export interface Transaction {
  _id?: string
  date: Date
  amount: number
  note: string
  type: TransactionType
  locationId: string
  createdAt: Date
  updatedAt: Date
}

export interface Balance {
  locationId: string
  amount: number
}