import Container from "../01-atoms/Container";
import Link from "next/link";
import React from "react";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-alpha-light-200 p-6">
      <Container className="flex items-center justify-between gap-6">
        <p>&copy; Company name</p>
        <p>
          Designed and built by{" "}
          <Link
            className="underline"
            href="https://northlink.digital"
            target="_blank"
          >
            NorthLink Digital
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
