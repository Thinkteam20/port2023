import {
    FaGithub,
    FaDev,
    FaLinkedin,
    FaQuora,
    FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Sangpil Jung. All Rights Reserved.`,
    author: {
        name: "Sangpil Jung",
        accounts: [
            {
                url: "https://github.com/MA-Ahmad",
                label: "Github Account",
                type: "gray",
                icon: <FaGithub />,
            },
            {
                url: "https://dev.to/m_ahmad",
                label: "Dev Account",
                type: "gray",
                icon: <FaDev />,
            },
            {
                url: "https://linkedin.com/in/muhammad-ahmad20",
                label: "LinkedIn Account",
                type: "linkedin",
                icon: <FaLinkedin />,
            },

            {
                url: "mailto:teamgrey10@likelion.org",
                label: "Mail sangpil",
                type: "red",
                icon: <FiMail />,
            },
        ],
    },
};

export default siteConfig;
