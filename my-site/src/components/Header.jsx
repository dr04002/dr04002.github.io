function Header() {
  return (
    <header className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Ling</h1>
      <nav>
        <ul className="flex flex-col space-y-2 text-sm text-blue-400">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
