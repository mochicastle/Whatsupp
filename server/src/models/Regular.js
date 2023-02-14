const Model = require("./Model")

class Regular extends Model {
    static get tableName() {
        return "regulars"
    }

    static get relationMappings() {
        const { User } = require("./index.js")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "regulars.userId",
                    to: "users.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string"},
                userId: { type: ["integer", "string"] }
            }
        }
    }
}

module.exports = Regular