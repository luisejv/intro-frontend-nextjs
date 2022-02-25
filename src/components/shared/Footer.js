import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            passHref
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>
          <span>© 2022 IntroFront, Inc</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
