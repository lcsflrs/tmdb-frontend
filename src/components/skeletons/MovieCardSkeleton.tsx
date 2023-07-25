const MovieCardSkeleton = () => {
  return (
    <button
      className="flex flex-col items-center"
      style={{
        maxWidth: 176,
      }}
    >
      <div
        className="rounded animate-pulse bg-slate-400"
        style={{ width: 176, height: 264 }}
      ></div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <div className="w-full h-4 rounded animate-pulse bg-slate-400"></div>
        <div className="w-full h-4 rounded animate-pulse bg-slate-400"></div>
      </div>
    </button>
  );
};

export default MovieCardSkeleton;
