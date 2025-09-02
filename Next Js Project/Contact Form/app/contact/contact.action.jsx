"use server";
import { redirect } from 'next/navigation';
import { db } from '../config/db'

export const contactAction = async (previousState, formData) => {
    try {
        // const fullName = formData.get("fullName");
        // const email = formData.get("email")
        // const message = formData.get("message")

        const { fullName, email, message } = Object.fromEntries(formData.entries())

        // console.log(fullName , email , message);

        await db.execute(
            `INSERT INTO contact_form (full_name, email, message) VALUES (?, ?, ?)`,
            [fullName, email, message]
        );

        // return { success: true, message: "Form Submitted Successfully " }
        redirect('/')

    }

    catch (error) {
        if (error.message === "NEXT_REDIRECT") throw error
        console.log("Server action : ", error);
        return { success: false, message: "Form submition failed" }
    }


}