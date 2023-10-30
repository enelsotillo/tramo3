import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('db_fabricas','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
export const startDb = async () => {
    try {
        await sequelize.sync();
        console.log('Conexion a la Base de datos establecidad con exito')
    } catch (error) {
        console.log('error de Conexion a la Base de datos', error)
    }
}