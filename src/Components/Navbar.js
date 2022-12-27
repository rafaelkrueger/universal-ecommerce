import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navbar({ data, cart }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
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
          backgroundColor:
            data !== null ? data.website.websiteNavbarFooterColor : "white",
          color: data !== null ? data.website.websiteFontFooterColor : "black",
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
        <div class="container-fluid" id="navbar-content">
          <div className="menu-logo">
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
          </div>
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
            </div>
          </div>
          <div className="navbar-search">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                <AiOutlineSearch />
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="O que você procura?"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div
              className="navbar-search-result"
              style={{
                backgroundColor:
                  data !== null
                    ? data.website.websiteNavbarFooterColor
                    : "black",
                color:
                  data !== null ? data.website.websiteFontFooterColor : "white",
              }}
            >
              <ul className="navbar-search-result-list">
                {data !== null
                  ? data.produto.filter((list, key) => {
                      if (list.product == search) {
                        return (
                          <li key={list.product._id} style={{ color: "white" }}>
                            ain
                          </li>
                        );
                      }
                    })
                  : ""}
              </ul>
            </div>
          </div>
          <div className="col" id={`last-navbar-fields-${navbar}`}>
            <div className="navbar-cart">
              <Link
                to={`${data == null ? "" : data._id}/cart`}
                id="nav-link-cart"
                class="nav-link"
              >
                <BsCart4 color={navbarStyle.color} />
                <span
                  className="cart-navbar-content-number"
                  style={{
                    backgroundColor:
                      data !== null
                        ? data.website.websiteNavbarFooterColor
                        : "black",
                    color:
                      data !== null
                        ? data.website.websiteFontFooterColor
                        : "white",
                  }}
                >
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
