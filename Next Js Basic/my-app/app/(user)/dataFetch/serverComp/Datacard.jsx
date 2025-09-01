export default async function Datacard({ userName }) {
  console.log("DataCard > ", userName)

  if (!userName) {
    return <h1 className="text-center">No name provided</h1>
  }

  let userInfo
  try {
    const res = await fetch(`https://api.genderize.io/?name=${userName}`, {
      cache: "no-store", // ensures fresh fetch each request
    })
    userInfo = await res.json()
  } catch (err) {
    return <h1 className="text-center">Failed to fetch data. Please try again later.</h1>
  }

  if (userInfo?.error) {
    return (
      <h1 className="text-center">
        API hit too many times. Please try again after some time.
      </h1>
    )
  }

  if (!userInfo?.name) {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-blue-500 p-4 rounded-full">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A7.97 7.97 0 0112 15c2.144 0 4.087.837 5.521 2.204M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h2 className="text-lg text-center font-semibold text-gray-700">
            No Name Found. <br /> Please Provide a Name like <br />
            url?name=YourName
          </h2>
        </div>
      </div>
    )
  }

  const gender = userInfo.gender
    ? `${userInfo.gender.charAt(0).toUpperCase()}${userInfo.gender
        .slice(1)
        .toLowerCase()}`
    : "Unknown"

  const confirmProbability = Math.round(Number(userInfo.probability) * 100)

  return (
    <div
      className={`max-w-full border border-red-500 mx-auto ${
        userInfo.gender === "male" ? "bg-white" : "bg-pink-300"
      } rounded-2xl shadow-lg p-6 space-y-4`}
    >
      {/* Profile Icon */}
      <div className="flex flex-col items-center space-y-2">
        <div className="bg-blue-500 p-4 rounded-full">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A7.97 7.97 0 0112 15c2.144 0 4.087.837 5.521 2.204M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">
          {userInfo.name}
        </h2>
        <span
          className={`bg-blue-100 ${
            userInfo.gender === "male" ? "text-blue-700" : "text-pink-700"
          } text-sm font-medium px-3 py-1 rounded-full`}
        >
          {gender}
        </span>
      </div>

      {/* Confidence */}
      <div>
        <div className="flex justify-between items-center text-sm font-medium text-gray-600 mb-1">
          <span>Confidence</span>
          <span>{confirmProbability}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${
              userInfo.gender === "male" ? "bg-blue-500" : "bg-pink-500"
            } h-2 rounded-full`}
            style={{ width: `${confirmProbability}%` }}
          ></div>
        </div>
      </div>

      {/* Data Sample Size */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Data Sample Size</span>
        <span className="font-semibold">{userInfo.count}</span>
      </div>

      {/* Accuracy Warning */}
      <div
        className={`flex items-center ${
          confirmProbability > 75
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        } text-sm font-medium px-3 py-2 rounded-lg`}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        {confirmProbability > 75 ? "High Accuracy" : "Low Accuracy"}
      </div>
    </div>
  )
}
