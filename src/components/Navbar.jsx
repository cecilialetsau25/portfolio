export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-center items-center gap-12">
        <a href="#about" className="text-gray-900 font-semibold">About</a>
        <a href="#skills" className="text-gray-900 font-semibold">Skills</a>
        <a href="#projects" className="text-gray-900 font-semibold">Projects</a>
        <a href="#contact" className="text-gray-900 font-semibold">Contact</a>
      </div>
    </nav>
  );
}
