import React, { useState } from "react";

const NavLinks = () => {
  const [heading, setHeading] = useState("");

  const links = [
    {
      name: "Services",
      sublinks: [
        { name: "Web Development", link: "#services" },
        { name: "App Development", link: "#services" },
        { name: "SEO Development", link: "#services" },
        { name: "Graphics Design", link: "#services" },
        { name: "E-commerce Services", link: "#services" },
        { name: "API Development", link: "#services" },
      ],
    },
    {
      name: "Industries",
      sublinks: [
        { name: "Healthcare", link: "#industries" },
        { name: "Insurance", link: "#industries" },
        { name: "Banking & Finance", link: "#industries" },
        { name: "Education", link: "#industries" },
        { name: "Trasnsport", link: "#industries" },
        { name: "Real Estate", link: "#industries" },
      ],
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div key={link.name} className="">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-5 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => setHeading(heading !== link.name ? link.name : "")}
            >
              <a className="text-black font-bold hover:text-[#f97068] duration-300"  href={link.sublinks[0].link}>{link.name}</a> {/* Updated */}
              <span className="text-xl">
                
              </span>
            </h1>

            {heading === link.name && (
              <ul className="md:hidden list-none space-y-2">
                {link.sublinks.map((sublink) => (
                  <li key={sublink.name} className="py-2 pl-7 ">
                    <a href={sublink.link} className="hover:text-[#f97068] ">{sublink.name}</a>
                  </li>
                ))}
              </ul>
            )}

            {/* For larger screens */}
            <div className="absolute top-17 hidden group-hover:md:block hover:md:block">
              <div className="py-2">
                <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
              </div>
              <div className="bg-white p-5 grid grid-cols-1 rounded gap-5">
                <ul className="list-none space-y-3">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.name} className="text-sm text-gray-600">
                      <a href={sublink.link} className="hover:text-[#f97068]">
                        {sublink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
