import React from "react";
import Image from "next/image";

const socialIcons = [
  {
    name: "X",
    url: "https://x.com",
    image: "/x.svg",
    alt: "X Icon",
  },
  {
    name: "GitHub",
    url: "https://github.com/abhay-design",
    image: "/github.svg",
    alt: "GitHub Icon",
  },
];

const Socialicons = () => {
  return (
    <div className="mb-4 flex justify-between">
      <h2 className="text-lg">Social Media</h2>
      <div className="flex gap-2">
        {socialIcons.map((socialIcon) => (
          <a
            key={socialIcon.name}
            href={socialIcon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-1 rounded-md hover:scale-110 transition duration-3"
          >
            <Image
              src={`/social-icons/${socialIcon.image}`}
              alt={socialIcon.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socialicons;
