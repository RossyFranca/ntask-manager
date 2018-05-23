module.exports = (sequelize, DataType) => {
    //sequeliza.define cria uma tarefa no banco de dados
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Tasks.belongsTo(models.Users);
                }
            }
        });
    return Tasks;
};