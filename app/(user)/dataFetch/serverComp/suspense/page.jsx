import Datacard from "../Datacard"

export default async function DateFetchServer({ searchParams }) {
  const userName = searchParams?.name

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      <div className="h-full flex justify-center items-center">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </h2>
      </div>

      {/* Agar Datacard server component hai, Suspense ki zarurat nahi */}
      <Datacard userName={userName} />
    </div>
  )
}
