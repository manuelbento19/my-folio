import React from "react";

export const Desktop = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="w-full h-screen overflow-auto flex p-2">
      <section id="device" className="m-auto max-w-4xl w-full">
        <header
          id="screen"
          className="w-[calc(100%-30px)] mx-auto relative border-gray-800 bg-white border-8 rounded-t-xl h-[80vh]  md:h-[500px] overflow-y-auto"
        >
          {children}
        </header>
        <footer
          id="keyboard"
          className="w-full relative bg-gray-900 rounded-b-xl rounded-t-sm h-4 md:h-5"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl h-1 w-14 max-w-24 bg-gray-800" />
        </footer>
      </section>
    </main>
  );
};
