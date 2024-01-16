/* eslint-disable react/prop-types */
export default function Hero({ section }) {
  return (
    <div className="min-h-[300px] w-full flex flex-col pt-6">
      <div className="mt-10 ml-20">
        <h1 className="font-sonsie text-[30px] mx-auto text-orange-400">
          {section}
        </h1>
      </div>
      <h1 className="font-sonsie text-[160px] mx-auto bg-gradient-to-t from-gray-200 to-gray-600 px-4 text-transparent bg-clip-text drop-shadow-[0_35px_35px_rgba(80,80,80,0.5)] mt-6">
        Notes
      </h1>
    </div>
  );
}
