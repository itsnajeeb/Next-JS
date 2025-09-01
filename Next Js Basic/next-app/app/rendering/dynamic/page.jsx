import { db } from '@/config/db.js'
export const dynamic = 'force-dynamic'
import { cache } from 'react'
const DynamicPage = async () => {

    // const [doctors] = await db.execute("SELECT * FROM doctors");
    const doctors = await getDoctorList();
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Dynamic Doctors List</h1>

            <DoctorList doctors={doctors} />
        </div>
    );

}
export default DynamicPage;

const DoctorList = async () => {
    const doctors = await getDoctorList()
    return (
        <>
            <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Gender</th>
                            <th className="px-6 py-3">Specialization</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {doctors.map((doctor) => (
                            <tr key={doctor.doctor_id} className="hover:bg-gray-700">
                                <td className="px-6 py-3">{doctor.doctor_id}</td>
                                <td className="px-6 py-3">{doctor.name}</td>
                                <td className="px-6 py-3">{doctor.gender}</td>
                                <td className="px-6 py-3">{doctor.specialization}</td>
                                <td className="px-6 py-3">{doctor.email}</td>
                                <td className="px-6 py-3">{doctor.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const getDoctorList = cache(async () => {
    const [doctors] = await db.execute("SELECT * FROM doctors");
    console.log("Fetching Doctor");
    return doctors
})