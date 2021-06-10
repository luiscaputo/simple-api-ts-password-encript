const mysql = require('mysql')

function connection() { 
    const connection = require('mysql')
    connection.connection({
      host: 'localhost',
      user: 'root',
      password: '',
      db_name: 'crud'
    })
  }
    export default connection