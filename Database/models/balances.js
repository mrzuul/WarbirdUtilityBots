module.exports = (sequelize, type) => {
    return sequelize.define('balances', {
        user_id: {
            type: type.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
        },
        user_name: {
            type: type.STRING,
            unique: true,
            allowNull: false,
        },
        user_cash_balance: {
            type: type.INTEGER,
            allowNull: false,
        },
        user_points_balance: {
            type: type.INTEGER,
            allowNull: false,
        },
        user_discord_id: {
            type: type.STRING,
            unique: true,
        }
    })
}