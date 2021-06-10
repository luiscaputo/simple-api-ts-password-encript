const mysql = require('mysql')

const connection = require('mysql')
    connection.connection({
      host: 'localhost',
      user: 'root',
      password: '',
      db_name: 'teste'
    })

    export default connection