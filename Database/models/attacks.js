module.exports = (sequelize, type) => {
    return sequelize.define('attacks', {
        attack_id: {
            type: type.STRING,
            unique: true,
            allowNull: false,
        },
        attack_attackerID: {
            type: type.STRING,
        },
        attack_attackerName: {
            type: type.STRING,
        },
        attack_defenderName: {
            type: type.STRING,
        },
        attack_factionID: {
            type: type.STRING,
        },
        attack_result: {
            type: type.STRING,
        },
        attack_stealthed: {
            type: type.STRING,
        },
        attack_respect: {
            type: type.FLOAT,
        },
        attack_chain: {
            type: type.INTEGER,
        },
        attack_timestamp: {
            type: type.STRING,
        },
        attack_modFair: {
            type: type.FLOAT,
        },
        attack_modWar: {
            type: type.FLOAT,
        },
        attack_modRet: {
            type: type.FLOAT,
        },
        attack_modGroup: {
            type: type.FLOAT,
        },
        attack_modTravel: {
            type: type.FLOAT,
        },
        attack_modChain: {
            type: type.FLOAT,
        },
    })
}