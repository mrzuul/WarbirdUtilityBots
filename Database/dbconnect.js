
const Sequelize = require('sequelize');

const AlliesModel = require('./models/Database/allies');
const AttacksModel = require('./models/Database/attacks');
const BalancesModel = require('./models/Database/balances');
const ChannelsModel = require('./models/Database/channels');
const EnemiesModel = require('./models/Database/enemies');
const FactionTransactionsModel = require('./models/Database/factionTransactions');
const FeaturesModel = require('./models/Database/features');
const RequestsModel = require('./models/Database/requests');
const RolesModel = require('./models/Database/roles');

const {db, dbuser, dbpassword} = require('./Database/dbconfig.json');

const sequelize = new Sequelize(db, dbuser, dbpassword, {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    operatorAliases: false,
    storage: 'database.sqlite',
});

const Allies = AlliesModel(sequelize, Sequelize);
const Attacks = AttacksModel(sequelize, Sequelize);
const Balances = BalancesModel(sequelize, Sequelize);
const Channels = ChannelsModel(sequelize, Sequelize);
const Enemies = EnemiesModel(sequelize, Sequelize);
const FactionTransactions = FactionTransactionsModel(sequelize, Sequelize);
const Features = FeaturesModel(sequelize, Sequelize);
const Requests = RequestsModel(sequelize, Sequelize);
const Roles = RolesModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Database & tables loaded');
    })
    .catch((error) => {
        console.log(error)
    });

module.exports = {
    Allies,
    Attacks,
    Balances,
    Channels,
    Enemies,
    FactionTransactions,
    Features,
    Requests,
    Roles
}