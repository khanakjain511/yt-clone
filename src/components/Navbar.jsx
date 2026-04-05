// import { Menu, Search, Bell } from "lucide-react";

// export default function Navbar() {
//   return (
//     <div className="flex items-center justify-between px-6 py-3 shadow-md fixed w-full bg-black z-50">
//       <div className="flex items-center gap-4">
//         <Menu className="cursor-pointer" />
//         <h2 className="text-lg font-bold text-red-500">YouTube</h2>
//       </div>

//       <div className="flex items-center w-1/2">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full border px-4 py-2 rounded-l-full outline-none"
//         />
//         <button className="border px-4 py-2 rounded-r-full bg-gray-100">
//           <Search size={20} />
//         </button>
//       </div>

//       <div className="flex items-center gap-4">
//         <Bell className="cursor-pointer" />
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="profile"
//           className="rounded-full w-8 h-8"
//         />
//       </div>
//     </div>
//   );
// }

import { Menu, Search, Mic, Plus, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-black flex items-center justify-between px-4 z-50">

      <div className="flex items-center gap-4">
        <Menu className="text-white cursor-pointer" size={22} />

        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-white text-lg font-semibold tracking-tight">
            YouTube
          </span>
          <span className="text-gray-400 text-xs mb-3">IN</span>
        </div>
      </div>

      <div className="flex items-center w-[40%] max-w-xl">

        <div className="flex items-center flex-1 bg-[#121212] border border-gray-700 rounded-l-full px-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 py-2 text-white outline-none"
          />
        </div>

        <button className="bg-[#222222] border border-l-0 border-gray-700 px-4 py-2 rounded-r-full hover:bg-[#303030]">
          <Search size={20} className="text-white" />
        </button>

        <button className="ml-3 bg-[#222222] p-2 rounded-full hover:bg-[#303030]">
          <Mic size={20} className="text-white" />
        </button>
      </div>

      <div className="flex items-center gap-4">

        <button className="flex items-center gap-2 bg-[#222222] px-4 py-2 rounded-full hover:bg-[#303030] text-white">
          <Plus size={18} />
          <span className="text-sm font-medium">Create</span>
        </button>

        <div className="relative cursor-pointer">
          <Bell size={22} className="text-white" />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        <div className="w-8 h-8 bg-purple-600 flex items-center justify-center rounded-full text-white font-semibold cursor-pointer">
          K
        </div>
      </div>
    </header>
  );
}