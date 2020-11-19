import { makeExecutableSchema } from "../node_modules/graph-tools"

import { resolvers } from "./resolvers"

const typeDefs = `
    type Activity {
        id: ID
        name: String
        date: String
        description: String
    }

    type ActivityOverview {
        name: String
        date: String
    }

    type Alert {
        id: ID
        name: String
        date: String
        description: String
    }

    type Item {
        id: ID
        name: String
        amount: Int
        date: String
        location: Location
    }

    enum Location {
        KITCHEN
        BATHROOM
        ROOMS
    }

    type User {
        id: ID
        name: String
        date: String
        description: String
    }

    type Query {
        getActivity(id: ID): Activity
        getActivities: [Activity]
        getAlert(id: ID): Alert
        getAlerts: [Alert]
        getItem(id: ID): Item
        getItems: [Item]
        getUser(id: ID): User
        getUsers: [User]
    }

    input ActivityInput {
        id: ID
        name: String
        date: String
        description: String
    }

    input AlertInput {
        id: ID
        name: String
        date: String
        description: String
    }

    input ItemInput {
        id: ID
        name: String
        amount: Int
        date: String
        location: Location
    }

    input UserInput {
        id: ID
        name: String
        date: String
        description: String
    }

    type Mutation {
        createActivity(input: ActivityInput): Activity
        createAlert(input: AlertInput): Alert
        createItem(input: ItemInput): Item
        createUser(input: UserInput): User
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };