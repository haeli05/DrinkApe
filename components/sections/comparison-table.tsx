const CheckIcon = () => (
  <svg
    className="w-6 h-6 mx-auto"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-6 h-6 mx-auto"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const comparisonData = [
  { feature: "No Fluroide", ape: true, notApe: false },
  { feature: "No Toilet Water", ape: true, notApe: false },
  { feature: "No Microplastic", ape: true, notApe: false },
  { feature: "Fun", ape: true, notApe: false },
  { feature: "Loved by dogs & primates", ape: true, notApe: false },
];

export function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-2 border-[rgb(12,34,26)] p-4 text-center font-normal text-sm lg:hidden">
                  Scroll left to right
                </th>
                <th className="border-2 border-[rgb(12,34,26)] bg-[rgb(255,200,0)] p-5 text-center font-bold text-xl uppercase">
                  Ape
                </th>
                <th className="border-2 border-[rgb(12,34,26)] p-5 text-center font-bold text-xl uppercase">
                  Not Ape
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <th className="border-2 border-[rgb(12,34,26)] p-5 text-left font-medium">
                    {row.feature}
                  </th>
                  <td className="border-2 border-[rgb(12,34,26)] bg-[rgb(255,200,0)] p-5 text-center">
                    {row.ape ? <CheckIcon /> : <XIcon />}
                  </td>
                  <td className="border-2 border-[rgb(12,34,26)] p-5 text-center">
                    {row.notApe ? <CheckIcon /> : <XIcon />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
