import React from "react";
import ThreeScene from "./ThreeScene";

export default function Landing() {
  return (
    <>
      {/* ThreeScene lives only on the landing page */}
      <ThreeScene />

      <section
        id="landing"
        style={{
          position: "relative",
          height: "calc(100vh - 64px)",
          marginTop: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          zIndex: 10, // ensures content sits above the ThreeScene
        }}
      >
        <div className="text-center space-y-6 md:space-y-8">
          <h1 class="font italic tracking-widest text-6xl bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-transparent bg-clip-text">
              LETSAU MAGALANE CECILIA
          </h1>

          <p className="text-lg md:text-0xl italic bg-gradient-to-r from-sky-300 via-sky-200 to-sky-100 text-transparent bg-clip-text tracking-widest">
            JUNIOR FULLSTACK DEVELOPER
          </p>
        </div>
      </section>
    </>
  );
}
