require('dotenv').config()
 
const configs = {
    api: {
        port: process.env.PORT || 9000,
        host: process.env.HOST || 'http://localhost:9000',
        nodeEnv: process.env.NODE_ENV || 'development'
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'An+onio98',
            database: 'FletyTrasnRuiz',
            define: {
                timestamps: true, 
                underscored: true,
                underscoredAll: true 
            }
        },
        production: {
            dialect: 'postgres',
            host:  process.env.DB_HOST,
            port:  process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true 
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }
    }
}

module.exports = configs
