import { Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="menuSocials">
        <a
          className="primaryTextLink"
          href="https://github.com/BrunoRiosAU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <Github className="icon" color="white" size={20} />
        </a>

        <a
          className="primaryTextLink"
          href="https://www.linkedin.com/in/bruno-r%C3%ADos-3b0998235/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin <Linkedin className="icon" color="white" size={20} />
        </a>

        <a
          className="primaryTextLink"
          href="https://www.instagram.com/brunorios04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram <Instagram className="icon" color="white" size={20} />
        </a>
      </div>

      <div className="designedBy">
        <p className="primaryText">
          Develop and designed by Bruno Ríos
        </p>
      </div>
    </footer>
  );
}