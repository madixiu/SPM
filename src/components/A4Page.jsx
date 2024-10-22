export default function A4Page({ children }) {
  return (
    <div className="max-h-full aspect-[1/1.414] mx-auto bg-white border border-gray-300 shadow-md relative overflow-hidden">
      {children}
    </div>
  );
}
