import React from "react";

type ScrollLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ScrollLink = ({ href, children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href?.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleScroll} {...props}>
      {children}
    </a>
  );
};

export default ScrollLink;
