const Pool = require('pg').Pool
const pool = new Pool({
  user: 'maulin',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});


const getUsers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  
  const createUser = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, age, email, mobile } = body
  
      pool.query('INSERT INTO merchants (name, age, email, mobile) VALUES ($1, $2, $3, $4) RETURNING *', [name, age, email, mobile], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new user has been added added: ${JSON.stringify(results.rows[0])}`)
      })
    })
  }
  
//   const deleteMerchant = (merchantId) => {
//     return new Promise(function(resolve, reject) {
//       const id = parseInt(merchantId)
  
//       pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(`Merchant deleted with ID: ${id}`)
//       })
//     })
//   }
  
  module.exports = {
    getUsers,
    createUser 
  }