import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

function Navbar({ data }) {
  const [screen, setScreen] = useState(window.outerWidth);
  const [screen2, setScreen2] = useState(window.outerHeight);
  const [navbar, setNavbar] = useState("");

  return (
    <>
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
          <Link
            class="navbar-brand"
            style={{ color: "white" }}
            to="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {screen > 600 ? (
              <img
                src={data == null ? "..." : data.logo}
                style={{ width: "20%", borderRadius: "10px " }}
              />
            ) : (
              <AiOutlineMenu
                color="white"
                onClick={(e) => {
                  e.preventDefault();
                  if (navbar == "responsive") {
                    setNavbar("");
                  } else {
                    setNavbar("responsive");
                  }
                }}
              />
            )}
          </Link>
          <div class="collapse navbar-collapse" id={`navbar-content${navbar}`}>
            <div class="navbar-nav" id="nav-links">
              <Link
                to="/"
                id="nav-link-home"
                class="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
              <Link to="/produtos" id="nav-link-valores" class="nav-link">
                Produtos
              </Link>
              <select className="select-category-modal">
                <option>Categorias</option>
                {data == undefined
                  ? ""
                  : data.categorias.map((list) => {
                      return (
                        <>
                          <option className="select-option-navbar" value={list}>
                            {list}
                          </option>
                        </>
                      );
                    })}
              </select>
              <Link to="/news" id="nav-link-sobre" class="nav-link">
                <BsCart4 />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
