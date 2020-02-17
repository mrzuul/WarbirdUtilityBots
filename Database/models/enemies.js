module.exports = (sequelize, type) => {
    return sequelize.define('enemies', {
        enemy_id: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        enemy_name: {
            type: type.STRING,
            allowNull: false,
        },
        faction_id: {
            type: type.STRING,
            allowNull: false,
        }
    })
}