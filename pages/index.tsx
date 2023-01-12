import { useState } from "react";
// import { LordIcon } from "../asset/Lordicon/lordicon";
import dynamic from "next/dynamic";

const CustomLordIcon = dynamic(
  () => import("../asset/Lordicon/icons/CustomLordIcon"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [searchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden">
        <div className="relative w-[90%] h-5/6 max-w-6xl rounded-3xl bg-white/5">
          <div
            className="absolute w-32 h-64 right-0 top-0 -rotate-45 blur-2xl"
            style={{
              background: "radial-gradient(rgba(1,65,255,.2),rgba(0,0,0,0))",
            }}
          />
          <div
            className="absolute w-64 h-96 bottom-0 rounded-[50%] blur-2xl"
            style={{
              background:
                "linear-gradient(to bottom right,rgba(1,65,255,0),rgba(1,65,255,0),rgba(1,65,255,.3))",
            }}
          />

          <div className="relative w-full h-14 flex px-8 justify-between items-center text-white">
            <div className="font-semibold tracking-wider text-lg">
              AuthorsLog
            </div>
            <div className="flex relative gap-4">
              <button className="flex items-center icon">
                <div
                  className="flex items-center"
                  onClick={() => setSearchBar(true)}
                >
                  <p>Search</p>
                  <div className="w-9 h-9">
                    <CustomLordIcon
                      src="https://cdn.lordicon.com/msoeawqm.json"
                      trigger="hover"
                      colors={{ primary: "#fff", secondary: "#fff" }}
                      size={36}
                    />
                  </div>
                </div>
              </button>
              <button className="flex items-center icon">
                <p>Log In</p>
                <div className="w-9 h-9">
                  <CustomLordIcon
                    src="https://cdn.lordicon.com/dxjqoygy.json"
                    trigger="hover"
                    colors={{ primary: "#fff", secondary: "#fff" }}
                    size={36}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`fixed w-[max(calc(100vh+50vw),calc(50vh+100vw))] h-[max(calc(100vh+50vw),calc(50vh+100vw))] rounded-full backdrop-blur-sm duration-200 bg-white/20 ${
            searchBar
              ? "z-10 scale-100 opacity-100"
              : "-z-10 scale-[0.1] opacity-0"
          }`}
          onClick={() => setSearchBar(false)}
        />
        <div
          className={`fixed top-[10%] text-gray-700 flex duration-200 ${
            searchBar ? "z-10 opacity-100" : "-z-10 opacity-0"
          }`}
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="outline-none bg-white rounded-l-full py-2 pl-6 w-[90vw] max-w-xl"
            placeholder="Search..."
          />
          <div className="w-10 h-10 rounded-r-full grid place-items-center bg-white">
            <div
              className="relative w-4 h-4 overflow-hidden rounded-full"
              onClick={() => setSearchText("")}
            >
              {searchBar && (
                <div
                  className={`absolute -top-2 -left-2 duration-50 ${
                    searchText
                      ? "opacity-100 cursor-pointer"
                      : "opacity-0 cursor-default"
                  }`}
                >
                  <CustomLordIcon
                    src="https://cdn.lordicon.com/nhfyhmlt.json"
                    trigger="hover"
                    colors={{ primary: "#a2a9b4" }}
                    size={32}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
