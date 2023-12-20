import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../data/data";
import { useState, useEffect } from "react";
const activeLink = "bg-slate-100 rounded-xl text-blue-700 ";
const normalLink = "text-blue-400 cursor-pointer";

const SidebarItems = () => {
  return links.map((item) => {
    return (
      <NavLink
        key={item.title}
        to={`/${item.title}`}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <div
          className="
          flex items-center p-2 font-normal text-2xl py-3
         hover:bg-sidebarHover rounded-xl transition-colors"
        >
          <span className="px-3">{item.icon}</span>
          <span className="capitalize">{item.title}</span>
        </div>
      </NavLink>
    );
  });
};

// const compactSidebarItem = () => {
//   return links.map((item) => {
//     return (
//       <NavLink
//         key={item.title}
//         to={`/${item.title}`}
//         className={({ isActive }) => (isActive ? activeLink : normalLink)}
//       >
//         <div
//           className="
//           flex items-center p-2 font-normal text-2xl py-3
//          hover:bg-sidebarHover rounded-xl transition-colors"
//         >
//           <span className="px-3">{item.icon}</span>
//         </div>
//       </NavLink>
//     );
//   });
// };

const Sidebar = () => {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // if (width < 1536) {
  //   return (
  //     <div className="relative mr-4 w-20 z-10">
  //       <nav
  //         className="
  //           h-screen overflow-auto flex flex-col bg-white p-3 fixed"
  //       >
  //         {compactSidebarItem()}
  //       </nav>
  //     </div>
  //   );
  // }

  return (
    <div className="relative min-w-80 w-80 mr-4 z-10">
      <nav
        className="
          h-screen overflow-auto flex flex-col
          w-72 bg-white drop-shadow-xl p-3 fixed"
      >
        {SidebarItems()}
      </nav>
    </div>
  );
};

export default Sidebar;
