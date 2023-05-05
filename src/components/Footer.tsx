import React from 'react';

import Socials from "./Socials";
import ButtonGitHub from "./ButtonGitHub";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className="flex items-center">
                &copy; Jeremy Novak {date}
            </div>
            <ButtonGitHub url="https://github.com/jgnovakdev/loanshark"/>
            <Socials/>
        </footer>
    );
};

export default Footer;