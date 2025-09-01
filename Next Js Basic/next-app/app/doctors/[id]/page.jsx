import React from "react";
import { db } from "@/config/db.js";
import { Mail, Phone, MapPin, Briefcase, BadgeCheck, Calendar } from "lucide-react";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const [doctor] = await db.execute(`select doctor_id from doctors`);
  return doctor.map(docotr => ({ id: docotr.doctor_id.toString() }))
}

const DoctorProfile = async ({ params }) => {
  // Get the doctor ID from route params

  const [rows] = await db.execute(
    "SELECT * FROM doctors WHERE doctor_id = ?",
    [params.id]
  );

  const doctor = rows[0];

  // If no doctor found, show Next.js 404 page
  if (!doctor) {
    return notFound();
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div>
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="text-sm">{doctor.specialization}</p>
            <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full inline-block mt-1">
              ● {doctor.status || "Active"}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 text-gray-700">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <Mail size={18} className="text-blue-500" />
          <span>{doctor.email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <Phone size={18} className="text-green-600" />
          <span>{doctor.phone}</span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-3">
          <MapPin size={18} className="text-red-500" />
          <span>{doctor.address}</span>
        </div>

        <hr />

        {/* Experience & License */}
        <div className="flex justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Briefcase size={18} className="text-yellow-600" />
            <span>{doctor.experience} years</span>
          </div>
          <div className="flex items-center space-x-2">
            <BadgeCheck size={18} className="text-purple-600" />
            <span>{doctor.license}</span>
          </div>
        </div>

        {/* Joined Date */}
        <div className="flex items-center space-x-2 text-sm">
          <Calendar size={18} className="text-purple-500" />
          <span>Joined {new Date(doctor.joined_date).toLocaleDateString()}</span>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 pt-2">
          ID: {doctor.doctor_id} · Born:{" "}
          {doctor.birth_date
            ? new Date(doctor.birth_date).toLocaleDateString()
            : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
