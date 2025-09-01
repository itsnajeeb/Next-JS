"use server";
import { db } from '../config/db'
export const contactAction = async (formData) => {
    // const fullName = formData.get("fullName");
    // const email = formData.get("email")
    // const message = formData.get("message")

    const { fullName, email, message } = Object.fromEntries(formData.entries())

    // console.log(fullName , email , message);

    await db.execute(
        `INSERT INTO contact_form (full_name, email, message) VALUES (?, ?, ?)`,
        [fullName, email, message]
    );


}