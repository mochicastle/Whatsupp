const Model = require("./Model")

class WildcardPick extends Model {
    static get tableName() {
        return "wildcardPicks"
    }

    static get relationMappings() {
        const { User } = require("./index.js")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "wildcardPicks.userId",
                    to: "users.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "street", "city", "state", "phone"],
            properties: {
                name: { type: "string"},
                street: { type: "string"},
                city: { type: "string"},
                state: { type: "string"},
                phone: { type: "string"},
                userId: { type: ["integer", "string"] }
            }
        }
    }
}

module.exports = WildcardPick