import {LinkButtonProps} from "./LinkButton";
import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";


export const contactButtonProps: LinkButtonProps[] = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/christopher-mcdonald-3702265119'
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    href: 'https://github.com/christopher-1989'
  }
]
