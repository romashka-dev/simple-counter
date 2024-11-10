import { FC } from "react"

interface logoProps {
  id: string;
  href: string;
  selectorImage: string;
  path: string;
  altText: string;
}

interface LogoList {
  logos: logoProps[];
}

export const LogoList: FC<LogoList> = ({ logos }) => {
  return(
    <div className="logo-list">
      {logos.map((logo) => (
        <a key={logo.id} className="logo-list__link" href={logo.href} target="_blank" rel="noopener noreferrer">
          <img
            className={logo.selectorImage}
            src={logo.path}
            width={64}
            height={64}
            alt={logo.altText}
          />
        </a>
      ))}
    </div>
  );
}
