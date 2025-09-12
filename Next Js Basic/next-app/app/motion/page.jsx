"use client"
// components/ProfileCard.tsx
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ use framer-motion

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const spanVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeIn" } },
};

const ProfileCard = () => {
    return (
        <motion.div
            className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto"
            variants={cardVariant}
            initial="hidden"
            animate="show"
        >
            {/* 1st card */}
            <motion.div
                variants={cardVariant}
                className="w-[230px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
            >
                <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop"
                    alt="Profile Picture"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        animate="show"
                        className="text-xl font-semibold text-gray-800">Asgar Ali</motion.h2>
                    <motion.p
                        variants={textVariant}
                        initial='hidden'
                        animate='show'
                        transition={{ delay: 0.2 }}
                        className="text-gray-500">Full Stack Engineer</motion.p>
                    <motion.div
                        variants={spanVariant}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="mt-4 flex items-center text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.21 2.12l-1.107 1.66a11.042 11.042 0 005.516 5.516l1.66-1.107a2 2 0 012.12-.21l2.773 1.387A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                            />
                        </svg>
                        <span>+91 620078526</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Repeat for other cards */}
            {/* Just wrap each one in motion.div with variants={card} */}
            <motion.div
                variants={cardVariant}
                className="w-[230px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
            >
                <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop"
                    alt="Profile Picture"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        animate="show"
                        className="text-xl font-semibold text-gray-800">Shadab Hussain</motion.h2>
                    <motion.p
                        variants={textVariant}
                        initial='hidden'
                        animate='show'
                        transition={{ delay: 0.2 }}
                        className="text-gray-500">Software Engineer</motion.p>
                    <motion.div
                        variants={spanVariant}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="mt-4 flex items-center text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.21 2.12l-1.107 1.66a11.042 11.042 0 005.516 5.516l1.66-1.107a2 2 0 012.12-.21l2.773 1.387A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                            />
                        </svg>
                        <span

                        >+91 6526323225</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Add remaining two cards same way */}
        </motion.div>
    );
}
export default ProfileCard