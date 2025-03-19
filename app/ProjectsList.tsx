import { HiOutlineBars3 } from "react-icons/hi2";

export default function ProjectsList() {
  const contracts = [
    { id: 1, name: "Contract name", percentage: "75%", total: 15, ongoing: 5, completed: 10 },
    { id: 2, name: "Contract name", percentage: "42%", total: 23, ongoing: 15, completed: 8 },
    { id: 3, name: "Contract name", percentage: "90%", total: 10, ongoing: 1, completed: 9 },
    { id: 4, name: "Contract name", percentage: "60%", total: 20, ongoing: 8, completed: 12 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6"> {/* Main container styling */}
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
      {/* Left Section */}
      <div className="absolute left-10 mt-[-150px] flex items-center gap-5">
        <HiOutlineBars3 className="text-black text-3xl font-bold stroke-[2]" /> {/* Left Icon */}
        <h2 className="text-2xl font-semibold">Concrete Works RMS</h2>
    </div>

      {/* Right Section */}
    <div className="absolute right-15 mt-[-150px]">
        <a href="#" className="text-red-500 px-4 py-2 font-semibold hover:underline">
          SIGN OUT
        </a>
      </div>
    </div>

      
      {/* Projects toolbar */}
      <div className="flex justify-between items-center mb-8"> {/* Toolbar styling */}
        <span className="font-medium text-2xl">PROJECTS</span>
        <div className="text-gray-500 flex gap-4 absolute right-127 items-center"> {/* Date filters */}
          <span className="font-medium text-black">FROM</span>
          <input type="date" className="border-2 border-black px-1 py-1"/>
          <span className="font-medium text-black">TO</span>
          <input type="date" className="border-2 border-black px-1 py-1"/>
        </div>
        
        <div className="flex gap-4 items-center"> {/* Search and new project button */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 border-2 border-black"
          />
          <button className="font-semibold bg-blue-300 text-black px-4 py-1 rounded-lg hover:bg-blue-400 border-2 border-black">
            + NEW PROJECT
          </button>
        </div>
      </div>

      {/* Contracts list */}
      <div className="grid grid-cols-2 gap-6 mb-8"> {/* Contract card grid layout */}
        {contracts.map((contract) => (
          <div key={contract.id} className="border-2 border-black rounded-3xl p-6 shadow-sm"> {/* Contract card styling */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Contract ID</span>
              <span className="text-gray-500">{contract.id}</span>
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">{contract.name}</h3>
              <span className="text-black font-bold">{contract.percentage}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 border-2 border-black h-3 mb-4 overflow-hidden"> {/* Progress bar container */}
              <div
                className="bg-blue-300 h-full"
                style={{ width: contract.percentage }}
              ></div>
            </div>

            {/* Task stats */}
            <div className="grid grid-cols-3 gap-2 text-center"> {/* Stats grid layout */}
              <div className="border-2 border-black p-2 rounded-2xl"> {/* Total Tests */}
                <p className="font-medium">Total Tests</p>
                <p className="text-2xl font-bold">{contract.total}</p>
              </div>
              <div className="border-2 border-black p-2 rounded-2xl"> {/* Ongoing */}
                <p className="font-medium">Ongoing</p>
                <p className="text-2xl font-bold">{contract.ongoing}</p>
              </div>
              <div className="border-2 border-black p-2 rounded-2xl"> {/* Completed */}
                <p className="font-medium">Completed</p>
                <p className="text-2xl font-bold">{contract.completed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 font-semibold"> {/* Pagination container */}
        <button className="p-2 hover:bg-gray-100 rounded">&lt;</button>
        <button className="p-2 px-3 bg-gray-100 rounded">1</button>
        <button className="p-2 px-3 hover:bg-gray-100 rounded">2</button>
        <button className="p-2 px-3 hover:bg-gray-100 rounded">3</button>
        <button className="p-2 px-3 hover:bg-gray-100 rounded">4</button>
        <span className="mx-2">...</span>
        <button className="p-2 px-3 hover:bg-gray-100 rounded">99</button>
        <button className="p-2 hover:bg-gray-100 rounded">&gt;</button>
      </div>
    </div>
  );
}