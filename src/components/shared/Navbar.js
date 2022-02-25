import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSearchContext } from "../../context/searchContext";

const Navbar = () => {
  const { query, setQuery } = useSearchContext();

  const router = useRouter();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            IntroFront
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href={"/"}>
                  <a
                    className={`nav-link ${
                      router.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/episodes"} activeClassName="active">
                  <a
                    className={`nav-link ${
                      router.pathname === "/episodes" ? "active" : ""
                    }`}
                  >
                    Episodes
                  </a>
                </Link>
              </li>
            </ul>
            <div className="ms-auto d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(event) => setQuery(event.currentTarget.value)}
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
