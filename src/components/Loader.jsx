export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="w-20 h-20 rounded-full animate-pulse opacity-60">
        <img
          src="/assets/logoOw.png"
          alt="Loading..."
          className="w-full h-full object-contain opacity-60 animate-pulse"
        />
      </div>
    </div>
  );
}
