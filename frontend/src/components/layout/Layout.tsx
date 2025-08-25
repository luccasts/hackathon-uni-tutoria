import { Outlet } from "react-router";
import Navbar from "../navBar/NavBar";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full max-w-7xl mx-auto p-6 ">
        <Outlet />
      </main>
    </>
  );
}
//  return (
//     <>
//       <header className="bg-blue-500 text-white sticky top-0 z-50 w-full">
//         <nav className="h-14 flex justify-between items-center w-7xl bg-blue-500 mx-auto">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold tracking-wide">
//             MeuSite
//           </Link>

//           {/* Links (empurrados pra direita) */}
//           <ul className="flex items-center gap-2">
//             <li>
//               <Link to="/" className="hover:text-blue-400 transition-colors">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/login"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/cadastrar"
//                 className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
//               >
//                 Criar Conta
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main className="w-full max-w-7xl mx-auto p-6 ">
//         <Outlet />
//       </main>
//     </>
//   );
