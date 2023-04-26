module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
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
            allowNull: false
            // set(value){
            //     this.setDataValue('password', hash(value));
            // }
        },
    });

    // return users;
};