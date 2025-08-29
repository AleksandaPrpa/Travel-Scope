function NavBarItem({ children, path = "#" }) {
  return (
    <a
      href={path}
      className="block py-2 px-3 rounded-sm md:hover:text-bright-accent md:dark:hover:text-dark-accent md:hover:border-b-1 md:hover:border-bright-accent md:dark:hover:border-dark-accent md:p-0 e ease-in duration-100 "
      aria-current="page"
    >
      {children}
    </a>
  );
}

export default NavBarItem;
