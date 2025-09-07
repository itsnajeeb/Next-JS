'use server'

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export const createHospitalAction = async (formData) => {
    try {

        const data = Object.fromEntries(formData);
        const { name, city, state, department, year } = data

        await db.execute(`INSERT INTO hospitals (name, city, state, department, year) VALUES(?,?,?,?,?) `,
            [name, city, state, department, year]
        )

        revalidatePath("/")
        return {
            success: true,
            message: "Data added Successfully"
        }

    } catch (error) {
        if (error.message === 'NEXT_REDIRECT') throw error;
        console.log(error);

        return { success: false, message: "Error while submitting error" }
    }
}