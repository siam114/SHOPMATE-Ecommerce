import database from './../database/db.js';

export async function createUserTable() {
    try {
        const query = ``;
        await database.query(query);
    } catch (error) {
        console.error("Error creating user table", error)
        process.exit(1);
    }
}