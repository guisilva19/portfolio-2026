"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SocialButton {
  icon: React.ReactNode;
  label: string;
  href: string;
  colors: {
    bg: string;
    bgHover: string;
    beforeBg: string;
    afterBg: string;
  };
}

export const SocialButtons3D = () => {
  const socialButtons: SocialButton[] = [
    {
      icon: <FaGithub className="w-4.5 h-4.5 sm:w-5 sm:h-5" />,
      label: "GitHub",
      href: "https://github.com/seu-usuario",
      colors: {
        bg: "#fff",
        bgHover: "#24292e",
        beforeBg: "#1a1e22",
        afterBg: "#2f363d",
      },
    },
    {
      icon: <FaLinkedin className="w-4.5 h-4.5 sm:w-5 sm:h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/seu-perfil",
      colors: {
        bg: "#fff",
        bgHover: "#0077b5",
        beforeBg: "#005885",
        afterBg: "#0095d9",
      },
    },
    {
      icon: <MdEmail className="w-4.5 h-4.5 sm:w-5 sm:h-5" />,
      label: "Gmail",
      href: "mailto:seu-email@gmail.com",
      colors: {
        bg: "#fff",
        bgHover: "#EA4335",
        beforeBg: "#c5221f",
        afterBg: "#f06a5e",
      },
    },
    {
      icon: <FaWhatsapp className="w-4.5 h-4.5 sm:w-5 sm:h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/5511999999999",
      colors: {
        bg: "#fff",
        bgHover: "#25D366",
        beforeBg: "#1ebe57",
        afterBg: "#2ee673",
      },
    },
  ];

  return (
    <div className="relative grid grid-cols-2 sm:flex sm:flex-nowrap gap-y-4 gap-x-1 sm:gap-2 justify-center items-center p-2 sm:p-4 max-w-[220px] sm:max-w-none mx-auto">
      <style jsx>{`
        .social-link {
          position: relative;
          display: flex;
          align-items: center;
          width: 105px;
          height: 42px;
          background: #fff;
          padding-left: 10px;
          transform: rotate(-30deg) skew(25deg) translate(0, 0);
          transition: all 0.5s;
          box-shadow: 
            -8px 8px 5px rgba(0, 0, 0, 0.5),
            0 12px 20px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1);
          text-decoration: none;
        }

        @media (min-width: 640px) {
          .social-link {
            width: 120px;
            height: 42px;
            padding-left: 12px;
            box-shadow: 
              -10px 10px 6px rgba(0, 0, 0, 0.5),
              0 15px 25px rgba(0, 0, 0, 0.15),
              0 10px 20px rgba(0, 0, 0, 0.1);
          }
        }

        .dark .social-link {
          background: oklch(0.269 0 0);
          box-shadow: 
            -8px 8px 5px rgba(0, 0, 0, 0.7),
            0 12px 20px rgba(0, 0, 0, 0.3),
            0 8px 16px rgba(0, 0, 0, 0.15);
        }

        @media (min-width: 640px) {
          .dark .social-link {
            box-shadow: 
              -10px 10px 6px rgba(0, 0, 0, 0.7),
              0 15px 25px rgba(0, 0, 0, 0.3),
              0 10px 20px rgba(0, 0, 0, 0.15);
          }
        }

        .social-link:before {
          content: "";
          position: absolute;
          top: 5px;
          left: -10px;
          height: 100%;
          width: 10px;
          background: #b1b1b1;
          transition: all 0.5s;
          transform: rotate(0deg) skewY(-45deg);
        }

        @media (min-width: 640px) {
          .social-link:before {
            top: 5px;
            left: -11px;
            width: 11px;
          }
        }

        .dark .social-link:before {
          background: oklch(0.205 0 0);
        }

        .social-link:after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: -5px;
          height: 10px;
          width: 100%;
          background: #b1b1b1;
          transition: all 0.5s;
          transform: rotate(0deg) skewX(-45deg);
        }

        @media (min-width: 640px) {
          .social-link:after {
            bottom: -11px;
            left: -5.5px;
            height: 11px;
          }
        }

        .dark .social-link:after {
          background: oklch(0.205 0 0);
        }

        .social-link:hover {
          transform: rotate(-30deg) skew(25deg) translate(10px, -8px);
          box-shadow: 
            -22px 22px 22px rgba(0, 0, 0, 0.5),
            0 20px 30px rgba(0, 0, 0, 0.2);
        }

        @media (min-width: 640px) {
          .social-link:hover {
            transform: rotate(-30deg) skew(25deg) translate(12px, -10px);
            box-shadow: 
              -28px 28px 28px rgba(0, 0, 0, 0.5),
              0 22px 35px rgba(0, 0, 0, 0.2);
          }
        }

        .dark .social-link:hover {
          box-shadow: 
            -22px 22px 22px rgba(0, 0, 0, 0.8),
            0 20px 30px rgba(0, 0, 0, 0.4);
        }

        @media (min-width: 640px) {
          .dark .social-link:hover {
            box-shadow: 
              -28px 28px 28px rgba(0, 0, 0, 0.8),
              0 22px 35px rgba(0, 0, 0, 0.4);
          }
        }

        .social-link .content-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .social-link .content-wrapper {
            gap: 8px;
          }
        }

        .social-link .icon-wrapper {
          color: #262626;
          transition: 0.5s;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dark .social-link .icon-wrapper {
          color: oklch(0.985 0 0);
        }

        .social-link:hover .icon-wrapper {
          color: #fff;
        }

        .social-link .label {
          color: #262626;
          letter-spacing: 0.8px;
          transition: 0.5s;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .social-link .label {
            letter-spacing: 1.5px;
            font-size: 11px;
          }
        }

        .dark .social-link .label {
          color: oklch(0.985 0 0);
        }

        .social-link:hover .label {
          color: #fff;
        }

        /* GitHub */
        .social-link.github:hover {
          background: #24292e;
        }
        .social-link.github:hover:before {
          background: #1a1e22;
        }
        .social-link.github:hover:after {
          background: #2f363d;
        }

        /* LinkedIn */
        .social-link.linkedin:hover {
          background: #0077b5;
        }
        .social-link.linkedin:hover:before {
          background: #005885;
        }
        .social-link.linkedin:hover:after {
          background: #0095d9;
        }

        /* Gmail */
        .social-link.gmail:hover {
          background: #ea4335;
        }
        .social-link.gmail:hover:before {
          background: #c5221f;
        }
        .social-link.gmail:hover:after {
          background: #f06a5e;
        }

        /* WhatsApp */
        .social-link.whatsapp:hover {
          background: #25D366;
        }
        .social-link.whatsapp:hover:before {
          background: #1ebe57;
        }
        .social-link.whatsapp:hover:after {
          background: #2ee673;
        }
      `}</style>

      {socialButtons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          target={button.href.startsWith("http") ? "_blank" : "_self"}
          rel={button.href.startsWith("http") ? "noopener noreferrer" : ""}
          className={`social-link ${button.label.toLowerCase()}`}
        >
          <div className="content-wrapper">
            <div className="icon-wrapper">{button.icon}</div>
            <span className="label">{button.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
};
