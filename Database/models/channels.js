module.exports = (sequelize, type) => {
    return sequelize.define('channels', {
        guild_id: {
            type: type.STRING,
            allowNull: false,
        },
        channel_id: {
            type: type.STRING,
            unique: true,
            allowNull: false,
        },
        channel_type: {
            type: type.STRING,
            allowNull: false,
        },
        role_id: {
            type: type.STRING,
            allowNull: false,
        }
    })
}