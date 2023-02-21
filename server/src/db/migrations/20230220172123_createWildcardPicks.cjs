/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("wildcardPicks", (table) => {
        table.bigIncrements("id")
        table.string("name").notNullable()
        table.string("street").notNullable(),
        table.string("city").notNullable(),
        table.string("state").notNullable(),
        table.string("phone").notNullable()
        table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("wildcardPicks")
}
