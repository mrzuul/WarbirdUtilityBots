module.exports = (sequelize, type) => {
    return sequelize.define('requests', {
        request_user: {
            type: type.STRING,
            allowNull: false,
        },
        request_status: {
            type: type.INTEGER,
        },
        request_content: {
            type: type.STRING,
        },
        request_amount: {
            type: type.STRING,
        }
    })
}