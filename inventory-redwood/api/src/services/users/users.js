import { db } from 'src/lib/db'

export const users = () => {
    return db.users.findMany()
}