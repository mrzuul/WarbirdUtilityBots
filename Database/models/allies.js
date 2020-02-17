module.exports = (sequelize, type) => {
    return sequelize.define('allies', {
        ally_id: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        ally_name: {
            type: type.STRING,
            allowNull: false,
        },
        faction_id: {
            type: type.STRING,
            allowNull: false,
        },
        ally_discord_id: {
            type: type.STRING,
        }
    })
}