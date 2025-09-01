import mysql from 'mysql2/promise'

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Najeeb@786#",
    database: 'hospital'
})

try{
    const connection  = await db.getConnection();
    console.log("Database Successfully Connected")
    connection.release();
}
catch(err){
    
    console.error("Database Connection Failed",err)
    process.exit(1);
}