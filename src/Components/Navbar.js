import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar({ data }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [screen, setScreen] = useState(window.outerWidth);
  const [screen2, setScreen2] = useState(window.outerHeight);
  const [navbar, setNavbar] = useState("");
  const [navbarStyle, setNavbarStyle] = useState({
    color: "",
    backgroundColor: "",
  });

  useEffect(() => {
    if (navbar.color == "") {
      setNavbarStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setTimeout(() => {
        setNavbarStyle({
          backgroundColor: data.website.websiteNavbarFooterColor,
          color: data.website.websiteFontFooterColor,
        });
      }, 500);
    }
  });

  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        id="navbar"
        style={{
          backgroundColor: navbarStyle.backgroundColor,
          color: navbarStyle.color,
        }}
      >
        <div class="container-fluid">
          <Link
            class="navbar-brand"
            style={{ color: "white" }}
            to={`${data == null ? "" : data._id}`}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {screen > 600 ? (
              <img
                src={data == null ? "..." : data.logo}
                id="navbar-logo"
                style={{
                  borderRadius: "50%",
                  objectFit: "contain",
                  width: "10%",
                  height: "10%",
                  borderRadius: "10px ",
                }}
              />
            ) : (
              <AiOutlineMenu
                color={navbarStyle.color}
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
                style={{ color: navbarStyle.color }}
                to={`${data == null ? "" : data._id}`}
                id="nav-link-home"
                class="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to={`${data == null ? "" : data._id}/produtos/all`}
                id="nav-link-valores"
                class="nav-link"
                style={{ color: navbarStyle.color }}
              >
                Produtos
              </Link>
              <select
                className="select-category-modal"
                id="select-category-modal-navbar"
                style={{
                  backgroundColor: navbarStyle.backgroundColor,
                  color: navbarStyle.color,
                  border: "0px white solid",
                }}
                onChange={(e) => {
                  navigate(
                    `/${data == null ? "" : data._id}/produtos/${
                      e.target.value
                    }`
                  );
                }}
              >
                <option>Categorias</option>
                {data == undefined
                  ? ""
                  : data.categorias.map((list) => {
                      return (
                        <>
                          <option
                            onClick={() => {
                              setCategory(list);
                            }}
                            className="select-option-navbar"
                            value={list}
                          >
                            {list}
                          </option>
                        </>
                      );
                    })}
              </select>
              <Link
                to={`${data == null ? "" : data._id}/cart`}
                id="nav-link-sobre"
                class="nav-link"
              >
                <BsCart4 color={navbarStyle.color} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
