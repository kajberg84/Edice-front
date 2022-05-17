// imports
import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export const ActiveLink = ({ linkUrl, linkText, small }) => {
  const router = useRouter();
  const [link, setLink] = React.useState(null);

  React.useEffect(() => {
    setLink(linkUrl);
  }, [linkUrl]);

  return (
    <Link href={linkUrl}>
      <a
        className={`${router.pathname == link ? "activeLink" : "nav_item"} ${
          small === "true" ? "smallText" : ""
        }`}
      >
        {linkText}
      </a>
    </Link>
  );
};
