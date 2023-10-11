/** Khai báo để có thể lấy các giá trị từ file .env */
require('dotenv').config();

/** Tạo config kết nối DB cho từng môi trường (hiện tại đang giống nhau, nên gom chung lại) */
module.exports = Object.fromEntries(['development', 'test', 'production'].map(key => [key, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "mysql",
    logging: process.env.DB_LOGGING ? console.log : false,
    query: {
        raw: true
    },
    timezone: process.env.DB_TIMEZONE,
    pool: {
        max: parseInt(process.env.DB_POOL_MAX),
        min: parseInt(process.env.DB_POOL_MIN),
        acquire: parseInt(process.env.DB_POOL_ACQUIRE),
        idle: parseInt(process.env.DB_POOL_IDLE),
    }
}]));