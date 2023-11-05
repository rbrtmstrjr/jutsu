export default function Scorecard() {
  return (
    <section className="px-32 py-16 bg-slate-50">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-10">Scorecard Computation - (Inprogress)</h1>
        <h1 className="text-2xl mb-10">
          Over All Score: <span className="font-bold">89%</span>
        </h1>
      </div>
      <div className="flex gap-8">
        <div className="w-9/12">
          <form action="">
            <div className="flex gap-4">
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Working Days</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="22"
                  disabled
                />
              </div>
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Actual Prod</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="13"
                />
              </div>
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Planned Leave</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="2"
                />
              </div>
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Man Hours Exemption</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="0"
                />
              </div>
            </div>
          </form>
          <hr className="border border-dashed border-gray-400 my-8" />
          <form action="">
            <div className="flex gap-4">
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Total Audited Site</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="22"
                  disabled
                />
              </div>
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Site With Error</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="13"
                />
              </div>
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">First PKT</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="2"
                />
              </div>
              <div className="flex gap-3 flex-col w-1/4">
                <span className="text-sm">Second PKT</span>
                <input
                  type="text"
                  className="px-6 py-3 rounded-lg w-full border border-gray-500"
                  value="0"
                />
              </div>
            </div>
          </form>
          <div className="flex gap-2 mt-8">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700"
              type="button"
            >
              Select Tearing{" "}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <button className="bg-gray-600 px-5 py-2.5 text-center rounded-lg text-white">
              Reset
            </button>
          </div>
        </div>
        <div className="w-3/12 text-center border border-gray-400 rounded-lg p-4">
          <h1 className="font-bold">Design Churn</h1>
          <hr className="my-3 border border-dashed border-gray-400" />
          <div className="flex gap-2 text-gray-600">
            <div className="w-1/2 text-sm">
              <ul className="flex flex-col gap-2">
                <li>Actual</li>
                <li>0% - 10%</li>
                <li>10.1% - 20%</li>
                <li>20.01% - 30%</li>
                <li>30.01% - 40%</li>
                <li>40.01% - 45%</li>
                <li>45.01% - 55%</li>
                <li>55.01% - 65%</li>
                <li>{`> 65%`}</li>
              </ul>
            </div>
            <div className="w-1/2 text-sm">
              <ul className="flex flex-col gap-2">
                <li>Equivalent</li>
                <li>100.00%</li>
                <li>95.00%</li>
                <li>90.00%</li>
                <li>85.00%</li>
                <li>80.00%</li>
                <li>75.00%</li>
                <li>70.00%</li>
                <li>100%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
