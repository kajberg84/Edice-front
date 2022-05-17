import * as React from "react";
import { ActiveLink } from "../../../../utils/ActiveLink";

export const NavbarItem = ({ linkUrl, linkText }) => {
  return <ActiveLink linkUrl={linkUrl} linkText={linkText} />;
};
