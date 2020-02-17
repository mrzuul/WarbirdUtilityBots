module.exports = (sequelize, type) => {
    return sequelize.define('roles', {
        role_id: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        role_name: {
            type: type.STRING,
            allowNull: false,
        },
        role_server: {
            type: type.STRING,
            allowNull: false,
        }
    })
}