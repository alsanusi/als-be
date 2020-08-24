var config = {
    database: {
        // Heroku
        // host: 'us-cdbr-east-02.cleardb.com',
        // user: 'b9e8051bd1e14c',
        // password: '5ff1e4a1',
        // database: 'heroku_114918c2a6320f6'

        // Localhost
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'als_db'
    },
    server: {
        host: '127.0.0.1',
        port: '3000'
    }
}

module.exports = config