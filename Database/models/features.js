module.exports = (sequelize, type) => {
    return sequelize.define('features', {
        feature_name: {
            type: type.STRING,
            unique: true,
            allowNull: false,
        },
        feature_state: {
            type: type.INTEGER,
        }
    })
}