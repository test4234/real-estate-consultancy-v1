export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-black border-t-transparent" />
      <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">
        Loading Properties
      </p>
    </div>
  );
}
