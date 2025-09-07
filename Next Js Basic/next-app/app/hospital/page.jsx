import { db } from "@/config/db";
import { createHospitalAction } from './hospital.action.js'

export default async function AddHospitalForm() {
    const [dbHospitalData] = await db.execute(`select * from hospitals`)
    return (
        <div className="flex justify-center items-center bg-black flex-col space-y-10 my-10">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl px-6 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Hospital</h2>
                <form className="space-y-6" action={createHospitalAction} >
                    <div className="flex gap-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Hospital Name</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="Enter hospital name"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                            <input
                                id="city"
                                name="city"
                                placeholder="Enter city"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>
                    <div className="flex gap-8">
                        <div>

                            <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
                            <input
                                id="state"
                                name="state"
                                placeholder="Enter state"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="department" className="block text-sm font-medium mb-1">Department</label>
                            <input
                                id="department"
                                name="department"
                                placeholder="Enter department"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>
                    <div className="flex gap-8 items-center">
                        <div>
                            <label htmlFor="year" className="block text-sm font-medium mb-1">Year</label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                placeholder="Enter year"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="self-end">
                            <button
                                type="submit"
                                className="w-full text-sm py-3 bg-blue-600 text-white font-semibold cursor-pointer px-4 rounded-lg hover:bg-blue-700 transition"
                            >
                                Add New Hospital
                            </button>
                        </div>
                    </div>
                </form>
            </div>



            <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">City</th>
                            <th className="px-6 py-3">State</th>
                            <th className="px-6 py-3">Department</th>
                            <th className="px-6 py-3">Establishment Year</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {dbHospitalData.map((hospital) => (
                            <tr key={hospital.id} className="hover:bg-gray-700">
                                <td className="px-6 py-3 text-center">{hospital.id}</td>
                                <td className="px-6 py-3 text-center">{hospital.name}</td>
                                <td className="px-6 py-3 text-center">{hospital.city}</td>
                                <td className="px-6 py-3 text-center">{hospital.state}</td>
                                <td className="px-6 py-3 text-center">{hospital.department}</td>
                                <td className="px-6 py-3 text-center">{hospital.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
