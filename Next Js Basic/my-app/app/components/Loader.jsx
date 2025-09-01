const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            <h2 className="text-lg text-gray-700 font-medium">Fetching your data...</h2>
        </div>
    );
};

export default Loader;
