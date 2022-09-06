import React from "react";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInternetExplorer,
  FaTwitter,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export const linkIcons = [
  {
    id: 1,
    icon: <FiMapPin className="icon" />,
    text: "5, Maria Ibironke avenue, Ikotun, Lagos state, Nigeria",
    url: "",
  },
  {
    id: 2,
    icon: <FaPhoneAlt className="icon" />,
    text: "234-7045896949",
    url: "",
  },
  {
    id: 3,
    icon: <MdEmail className="icon" />,
    text: "waleoxy@gmail.com",
    url: "",
  },
  {
    id: 4,
    icon: <FaGithub className="icon" />,
    text: "https://github.com/waleoxy",
    url: "https://github.com/waleoxy",
  },
  {
    id: 5,
    icon: <FaLinkedin className="icon" />,
    text: "www.linkedin.com/in/waleoxy",
    url: "https://www.linkedin.com/in/waleoxy",
  },
  {
    id: 6,
    icon: <FaTwitter className="icon" />,
    text: "https://twitter.com/waleoxy",
    url: "https://twitter.com/waleoxy",
  },
];
