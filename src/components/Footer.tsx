import React from 'react';

import Socials from "./Socials";
import ButtonGitHub from "./ButtonGitHub";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="mx-auto max-w-6xl">
            <div className="hidden md:flex p-4 text-zinc-900 items-center justify-between">
                <div className="items-center justify-between">
                    &copy; Jeremy Novak {date}
                </div>
                <ButtonGitHub url="https://github.com/jgnovakdev/loanshark"/>
                <Socials/>
            </div>
            <div className="block md:hidden text-zinc-900">
                <div className="flex mb-2 p-4 items-center justify-between">
                    &copy; Jeremy Novak {date}
                    <Socials/>
                </div>
            </div>
        </footer>

    );
};

export default Footer;