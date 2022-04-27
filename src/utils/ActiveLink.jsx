import Link from "next/link";
import { useRouter } from "next/router";

export const ActiveLink = ({ linkUrl, linkText }) => {
  const router = useRouter();
  let link = "";
  if (linkUrl === "/") {
    link = linkUrl;
  } else {
    link = `/${linkUrl}`;
  }
  return (
    <Link href={linkUrl}>
      <a className={router.pathname == link ? "activeLink" : "nav_item"}>
        {linkText}
      </a>
    </Link>
  );
};
