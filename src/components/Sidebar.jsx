// import { Home, Clapperboard, Youtube, History, ListVideo, Clock, ThumbsUp, Download, ShoppingBag, Music, Film, ChevronDown, ChevronRight, Settings, Flag, MessageCircleQuestionMark, MessageSquareWarning } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-black text-white fixed left-0 top-0 overflow-y-auto border-r border-gray-800">

//       <div className="pt-16 px-3 space-y-1">

//         <SidebarItem icon={<Home size={22} />} label="Home" active />
//         <SidebarItem icon={<Clapperboard size={22} />} label="Shorts" />
//         <SidebarItem icon={<Youtube size={22} />} label="Subscriptions" />

//         <Divider />

//         <div className="px-3 py-2 text-gray-300 font-semibold flex items-center justify-between">
//           You <ChevronRight size={18} />
//         </div>

//         <SidebarItem icon={<History size={22} />} label="History" />
//         <SidebarItem icon={<ListVideo size={22} />} label="Playlists" />
//         <SidebarItem icon={<Clock size={22} />} label="Watch later" />
//         <SidebarItem icon={<ThumbsUp size={22} />} label="Liked videos" />
//         <SidebarItem icon={<Download size={22} />} label="Downloads" />

//         <Divider />

//         <div className="px-3 py-2 text-gray-300 font-semibold">
//           Explore
//         </div>

//         <SidebarItem icon={<ShoppingBag size={22} />} label="Shopping" />
//         <SidebarItem icon={<Music size={22} />} label="Music" />
//         <SidebarItem icon={<Film size={22} />} label="Movies" />
//         <SidebarItem icon={<ChevronDown size={22} />} label="Show more" />

//         <Divider />

//         <div className="px-3 py-2 text-gray-300 font-semibold">
//           More from YouTube
//         </div>

//         <SidebarItem icon={<Youtube size={22} />} label="YouTube Premium" />
//         <SidebarItem icon={<Music size={22} />} label="YouTube Music" />
//         <SidebarItem icon={<Youtube size={22} />} label="YouTube Kids" />

//         <Divider />
//         <SidebarItem icon={<Settings size={22} />} label="Settings" />
//         <SidebarItem icon={<Flag size={22} />} label="Report history" />
//         <SidebarItem icon={<MessageCircleQuestionMark size={22} />} label="Help" />
//         <SidebarItem icon={<MessageSquareWarning size={22} />} label="Send Feedback" />


//       </div>
//     </div>
//   );
// }

// function SidebarItem({ icon, label, active }) {
//   return (
//     <div
//       className={`flex items-center gap-5 px-3 py-2 rounded-xl cursor-pointer transition-all
//         ${active ? "bg-gray-800" : "hover:bg-gray-800"}
//       `}
//     >
//       <div className="text-gray-300">{icon}</div>
//       <span className="text-sm">{label}</span>
//     </div>
//   );
// }

// function Divider() {
//   return <div className="border-t border-gray-800 my-3" />;
// }

// First we import icons from lucide-react
import {
  Home,
  Clapperboard,
  Youtube,
  History,
  ListVideo,
  Clock,
  ThumbsUp,
  Download,
  ShoppingBag,
  Music,
  Film,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    // Main sidebar container
    <div className="w-64 h-screen bg-black text-white fixed left-0 top-0 overflow-y-auto">

      {/* Add some space from top */}
      <div className="pt-16 px-4">

        {/* ===== MAIN SECTION ===== */}
        <MenuItem icon={<Home size={20} />} text="Home" />
        <MenuItem icon={<Clapperboard size={20} />} text="Shorts" />
        <MenuItem icon={<Youtube size={20} />} text="Subscriptions" />

        <Line />

        {/* ===== LIBRARY SECTION ===== */}
        <MenuItem icon={<History size={20} />} text="History" />
        <MenuItem icon={<ListVideo size={20} />} text="Playlists" />
        <MenuItem icon={<Clock size={20} />} text="Watch Later" />
        <MenuItem icon={<ThumbsUp size={20} />} text="Liked Videos" />
        <MenuItem icon={<Download size={20} />} text="Downloads" />

        <Line />

        {/* ===== EXPLORE SECTION ===== */}
        <MenuItem icon={<ShoppingBag size={20} />} text="Shopping" />
        <MenuItem icon={<Music size={20} />} text="Music" />
        <MenuItem icon={<Film size={20} />} text="Movies" />

        <Line />

        {/* ===== SETTINGS ===== */}
        <MenuItem icon={<Settings size={20} />} text="Settings" />

      </div>
    </div>
  );
}


// 🔹 This is a single menu item (icon + text)
function MenuItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}


// 🔹 This is just a horizontal line divider
function Line() {
  return <div className="border-t border-gray-700 my-3"></div>;
}