import mysql from 'mysql2/promise'

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Najeeb@786#',
    database: 'contact_form_data'
});

try {
    const connection = await db.getConnection();
    console.log("Database Connected Successfully")
    connection.release()

} catch (err) {

    console.error("Database Connection Failed", err)
    process.exit(1);
}

