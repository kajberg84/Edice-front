// imports
import Link from 'next/link';

const NavBtn = ({ link, btnText }) => {
  return (
    <Link href={link}>
      <a className="btn-primary">{btnText}</a>
    </Link>
  );
};

const NavBtnSecondary = ({ link, btnText }) => {
  return (
    <Link href={link}>
      <a className="btn-secondary">{btnText}</a>
    </Link>
  );
};

const NavBtnGhost = ({ link, btnText }) => {
  return (
    <Link href={link}>
      <a className="btn-ghost">{btnText}</a>
    </Link>
  );
};

export { NavBtn, NavBtnSecondary, NavBtnGhost };
