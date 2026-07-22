import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
  faFacebook,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import LocalConfig from "@/constants/config";
import type { ISocialLinkItem } from "@/types";

/** Contact grid — one rectangular SocialButton style only (even count). */
const socialLinks: ISocialLinkItem[] = [
  {
    name: "Resume",
    url: LocalConfig.values.NEXT_PUBLIC_RESUME_LINK,
    icon: faFileLines,
    text: "View Resume",
  },
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: Strings.primaryEmail,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  {
    name: Strings.twitter,
    url: Strings.twitterLink,
    icon: faXTwitter,
    text: Strings.twitterUsername,
  },
  {
    name: Strings.instagram,
    url: Strings.instagramLink,
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
  {
    name: Strings.facebook,
    url: Strings.facebookLink,
    icon: faFacebook,
    text: Strings.facebookUsername,
  },
  {
    name: Strings.devto,
    url: Strings.devtoLink,
    icon: faDev,
    text: Strings.devtoUsername,
  },
];

export default socialLinks;
