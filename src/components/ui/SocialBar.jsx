import { useState } from 'react';
import { RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

export default function SocialBar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const socials = [
        {
            IconComponent: RiInstagramFill,
            href: 'https://www.instagram.com/jacobhlind/'
        },
        {
            IconComponent: RiFacebookCircleFill,
            href: 'https://www.facebook.com/jacob.lind1'
        },
        {
            IconComponent: RiWhatsappFill,
            href: 'https://wa.me/004521221945'
        },
        {
            IconComponent: RiLinkedinBoxFill,
            href: 'https://www.linkedin.com/in/jacoblindseo/'
        },
        {
            IconComponent: RiGithubFill,
            href: 'https://github.com/lindjacob'
        }
    ]


}