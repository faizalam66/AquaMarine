import React from "react";
import { UsersRound, ArrowBigUpDash } from "lucide-react";

const dashboardItems = [
  {
    title: "Users",
    amount: "300",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
  {
    title: "Budget",
    amount: "$750.90",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
  {
    title: "Budget",
    amount: "$750.90",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
  {
    title: "Budget",
    amount: "$750.90",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
];

// function AdminDashboard() {
//   return (
//     <div className="flex flex-wrap">
//       <div className="w-full pt-4 px-4">
//         <span className="text-5xl font-bold text-green-400">My Dashboard</span>
//       </div>
//       {dashboardItems.map((item, index) => (
//         <div
//           key={index}
//           className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 flex flex-col justify-between py-10"
//         >
//           <div className="bg-white border rounded-lg shadow-lg p-4 mt-10">
//             <div className="flex flex-row mb-4 p-4">
//               <div className="flex-1">
//                 <span className="text-xs font-semibold text-gray-500 uppercase">
//                   {item.title}
//                 </span>
//                 <h2 className="text-xl font-bold">{item.amount}</h2>
//               </div>
//               <div className="flex-none">
//                 <div className="bg-tertiary rounded-full p-3">
//                   <item.icon />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AdminDashboard;

function AdminDashboard() {
  // Sample user data
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" },
    // Add more user data as needed
  ];

  // User table component
  const UserTable = () => (
    <div className="bg-white border rounded-lg shadow-lg p-4 mt-10">
      <h2 className="text-xl font-bold mb-4">User Table</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Avatar</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-3 py-3">
                <img src={user.avatar} alt={`Avatar of ${user.name}`} className="w-10 h-10 rounded-full " />
              </td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-wrap">
      <div className="w-full pt-4 px-4">
        <span className="text-5xl font-bold text-green-400">My Dashboard</span>
      </div>
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 flex flex-col justify-between py-10"
        >
          <div className="bg-white border rounded-lg shadow-lg p-4 mt-10">
            <div className="flex flex-row mb-4 p-4">
              <div className="flex-1">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {item.title}
                </span>
                <h2 className="text-xl font-bold">{item.amount}</h2>
              </div>
              <div className="flex-none">
                <div className="bg-tertiary rounded-full p-3">
                  <item.icon />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Render the User Table component here */}
      <div className="w-full px-4">
        <UserTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
