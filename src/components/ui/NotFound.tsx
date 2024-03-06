export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 text-center my-auto">
      <h2 className="text-4xl font-bold">Pokemon Not Found</h2>
      <p className="text-2xl text-gray-400">
        The requested Pokemon could not be found in the Pokedex
      </p>
    </div>
  );
}
