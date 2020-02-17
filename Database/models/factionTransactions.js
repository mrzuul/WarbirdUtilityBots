module.exports = (sequelize, type) => {
    return sequelize.define('factionTransactions', {
        transaction_id: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        transaction_timestamp: {
            type: type.STRING,
            allowNull: false,
        },
        transaction_content: {
            type: type.STRING,
            allowNull: false,
        }
    })
}