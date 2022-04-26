// import { useMatch, useResolvedPath, Link } from "react-router-dom";

// function CustomLink({ children, to, ...props }) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <div>
//       <Link
//         style={{ textDecoration: match ? "underline" : "none" }}
//         to={to}
//         {...props}
//       >
//         {children}
//       </Link>
//     </div>
//   );
// }

// export default CustomLink;

import React from 'react'

export const CustomLink = () => {
  return (
    <div>CustomLink</div>
  )
}
