import React from 'react';
import { FaPhoneAlt, FaGithub, FaLinkedin, FaInternetExplorer } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export const linkIcons = [
    {
        id: 1,
        icon: <FiMapPin className="icon" />,
        text: "5, Maria Ibironke avenue, Ikotun, Lagos state, Nigeria",
        url: ""
    },
    {
        id: 2,
        icon: <FaPhoneAlt className="icon" />,
        text: "234-7045896949",
        url: ""
    },
    {
        id: 3,
        icon: <FaGithub className="icon" />,
        text: "www.github.com/waleoxy",
        url: "https://www.github.com/waleoxy"
    },
    {
        id: 4,
        icon: <FaLinkedin className="icon" />,
        text: "www.linkedin.com/in/olawale-otubu-a090008a",
        url: "https://www.linkedin.com/in/olawale-otubu-a090008a"
    },
    {
        id: 5,
        icon: < MdEmail className="icon" />,
        text: "waleoxy@gmail.com",
        url: ""
    },
    {
        id: 6,
        icon: < FaInternetExplorer className="icon" />,
        text: "olawaleotubu.netlify.app/",
        url: "https://olawaleotubu.netlify.app/"
    }


]
