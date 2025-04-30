import type { ISocialLinkItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Strings from "@/constants/strings";

interface SocialButtonProps extends ISocialLinkItem {
  onClick?: () => void;
}

const SocialButton = ({ text, icon, url, name, onClick }: SocialButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (name === Strings.email) {
      e.preventDefault();
      // Check if device is mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = `mailto:${text}`;
      } else {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${text}`, '_blank');
      }
    }
    onClick?.();
  };

  return (
    <Link
      className="relative flex flex-row bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center text-center justify-center gap-2 cursor-pointer overflow-hidden z-[1] transition duration-500 ease-in-out before:content-[''] before:w-full before:h-full before:m-auto before:absolute before:top-0 before:left-[-100%] before:bg-[var(--primaryColor50)] before:z-[-1] before:transition-all before:duration-500 before:ease hover:before:top-0 hover:before:left-0 hover:before:border-0 hover:before:translate-x-0"
      href={url}
      target="_blank"
      onClick={handleClick}
    >
      <span className="text-xl/6 text-[var(--textColor)]">
        {typeof icon === "string" ? (
          <Image
            src={icon}
            alt={`social-${text}`}
            width={100}
            height={100}
            className="w-[1.5rem] h-auto aspect-square"
          />
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </span>

      <p className="text-lg/6 font-semibold text-[var(--textColor)]">{text}</p>
    </Link>
  );
};

export default SocialButton;