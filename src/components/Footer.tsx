import React from 'react';

import Socials from "./Socials";
import ButtonGitHub from "./ButtonGitHub";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="mx-auto max-w-6xl">
            <div className="hidden md:flex p-4 mx-4 mt-8 text-white items-center justify-between bg-slate-800 rounded-md shadow-lg">
                <div className="items-center justify-between">
                    &copy; Jeremy Novak {date}
                </div>
                <div className="flex md:space-x-2 lg:space-x-8">
                    <ButtonGitHub url="https://github.com/jgndev/loanshark" text="Frontend Source"/>
                    <ButtonGitHub url="https://github.com/jgndev/loanshark-api" text="Backend Source"/>
                </div>
                <Socials/>
            </div>
            <div className="block md:hidden">
                <div className="flex m-4 p-4 items-center justify-between text-slate-200 bg-slate-800 rounded-md shadow-lg">
                    &copy; Jeremy Novak {date}
                    <Socials/>
                </div>
            </div>
        </footer>

    );
};

export default Footer;