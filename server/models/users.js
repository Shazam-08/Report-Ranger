module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        registrationID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            set(value){
                this.setDataValue('password', hash(value));
            }
        },
    });

    return users;
};