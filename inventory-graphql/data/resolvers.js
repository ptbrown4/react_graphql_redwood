import { Activities, Alerts, Items, Users } from "./dbConnectors";

export const resolvers = {
    Query: {
        getActivity: (_, { id }) => {
            return new Promise((resolve, reject) => {
                Activities.findById(id, (err, activity) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(activity)
                    }
                })
            })
        },
        getActivities: (_) => {
            return Activities.find()
        },
        getAlert: (_, { id }) => {
            return new Promise((resolve, reject) => {
                Alerts.findById(id, (err, alert) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(alert)
                    }
                })
            })
        },
        getAlerts: (_) => {
            return Alerts.find()
        },
        getItem: (_, { id }) => {
            return new Promise((resolve, reject) => {
                Items.findById(id, (err, item) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(item)
                    }
                })
            })
        },
        getItems: (_) => {
            return Items.find()
        },
        getUser: (_, { id }) => {
            return new Promise((resolve, reject) => {
                Users.findById(id, (err, user) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(user)
                    }
                })
            })
        },
        getUsers: (_) => {
            return Users.find()
        },
    },
    Mutation: {
        createActivity: (_, { input }) => {
            const newActivity = new Activities({
                name = input.name,
                date = input.date,
                description = input.description
            })

            newActivity.id = newActivity._id

            return new Promise((resolve, reject) => {
                newActivity.save((err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(newActivity)
                    }
                })
            })},
        createAlert: (_, { input }) => {
            const newAlert = new Alerts({
                name = input.name,
                date = input.date,
                description = input.description
            })
    
            newAlert.id = newAlert._id
    
            return new Promise((resolve, reject) => {
                newActivity.save((err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(newActivity)
                    }
                })
            })},
        createItem: (_, { input }) => {
            const id = require("crypto").randomBytes(10).toString("hex");
            rootDb[id] = input;

            return new Item(id, input);
        },
        createUser: (_, { input }) => {
            const id = require("crypto").randomBytes(10).toString("hex");
            rootDb[id] = input;

            return new User(id, input);
        },
        updateActivity: (_, { input }) => {
            return new Promise((resolve, reject) => {
                Activities.findOneAndUpdate(
                    { _id: input.id },
                    input,
                    (err, activity) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(activity)
                        }
                    }
                )
            })
        },
        deleteActivity: (_, { id }) => {
            return new Promise((resolve, reject) => {
                Activities.deleteOne({ _id: id }, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve("Successfully deleted activity")
                    }
                })
            })
        }
    }
}