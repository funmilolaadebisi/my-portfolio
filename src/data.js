import React from "react"
import { FaLinkedin, FaGithub, FaTwitter, FaMailBulk } from 'react-icons/fa'

export const projects = [
  {
    id: 1,
    image: "https://i.ibb.co/fDxVVmY/image-1.jpg",
    href: "https://sli-der.netlify.app/",
    title: "Slider",
  },
  {
    id: 2,
    image: "https://i.ibb.co/sFG46j4/image-2.jpg",
    href: "https://colurgenerator.netlify.app/",
    title: "Color generator",
  },
  {
    id: 3,
    image: "https://i.ibb.co/HP0tmfB/image-3.jpg",
    href: "https://grocerybod.netlify.app/",
    title: "Grocery bud",
  },
  {
    id: 4,
    image: "https://i.ibb.co/6WzLs7F/image-4.jpg",
    href: "https://menu4u.netlify.app/",
    title: "Menu",
  },
  {
    id: 5,
    image: "https://i.ibb.co/kmnDBmH/image-5.jpg",
    href: "https://takeourtours.netlify.app/",
    title: "Tours",
  },
  {
    id: 6,
    image: "https://i.ibb.co/2dZ0j0p/image-6.jpg",
    href: "https://stripeemenu.netlify.app/",
    title: "Stripe Clone",
  },
];

export const socials = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/funmilola-adebisi-072aa21a5/',
        icon: <FaLinkedin/>,
    },
    {
        id: 2,
        url: 'https://github.com/funmilolaadebisi',
        icon: <FaGithub/>,
    },
    {
        id: 3,
        url: 'https://twitter.com/__lolaog',
        icon: <FaTwitter/>,
    },
    {
        id: 4,
        url: 'mailto:funmilolaadebisi00@gmail.com',
        icon: <FaMailBulk/>,
    },
]