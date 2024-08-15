import { FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import { Social } from "./types";

export const SOCIAIS = [
    { type: Social.Github, icon: FaGithub},
    { type: Social.Facebook, icon: FaFacebook },
    { type: Social.Linkedin, icon: FaLinkedin },
    { type: Social.Instagram, icon: FaInstagram },
    { type: Social.Medium, icon: FaMedium },
    { type: Social.Outro, icon: FaLink },
    { type: Social.Twitter, icon: FaTwitter },
    { type: Social.Youtube, icon: FaYoutube },
];