import React from "react";

export default function Landing() {
  return (
    <section
      id="landing"
      className="w-full h-screen flex flex-col items-center justify-center px-6 bg-transparent overflow-hidden"
    >
      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 mb-6 text-center drop-shadow-md">
        LETSAU MAGALANE CECILIA
      </h1>

      {/* Role */}
      <p className="text-lg md:text-2xl italic bg-gradient-to-r from-sky-300 via-sky-200 to-sky-100 text-transparent bg-clip-text tracking-widest mb-8 text-center">
        JUNIOR FULLSTACK DEVELOPER
      </p>
    </section>
  );
}
