import NavBarItem from "./NavBarItem";
import ThemeSwitcher from "./ThemeSwitcher";

function NavBar() {
  return (
    <nav className="bg-bright-secondary dark:bg-dark-secondary shadow-md shadow-bright-highlight-30 dark:shadow-dark-highlight-30 text-bright-text dark:text-dark-text">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Travel Scope
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-bright-primary dark:hover:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-bright-primary dark:focus:ring-dark-primary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bright-primary dark:border-dark-primary rounded-l md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-bright-secondary dark:bg-dark-secondary md:dark:bg-dark-secondary">
            <li>
              <NavBarItem path="/">Home</NavBarItem>
            </li>
            <li>
              <NavBarItem path="/pricing">Pricing</NavBarItem>
            </li>
            <li>
              <NavBarItem path="/contact">Contact</NavBarItem>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
