export const schema = gql`
    type User {
        id: Int
        name: String
        date: String
        description: String
    }

    type Query {
        users: [User]
    }
`