import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Costumer from "./Costumer";
import Api from "../Api";
import { AiFillHeart } from "react-icons/ai";

function Navbar({
  data,
  cart,
  setCart,
  logged,
  setLogged,
  costumer,
  setCostumer,
}) {
  const navigate = useNavigate();
  const [modal, setModal] = useState("hidden");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [screen, setScreen] = useState(window.outerWidth);
  const [navbar, setNavbar] = useState("");
  const skeletonImage =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
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
      <Costumer
        data={data}
        cart={cart}
        setCart={setCart}
        modal={modal}
        setModal={setModal}
        navbarStyle={navbarStyle}
        costumer={costumer}
        setCostumer={setCostumer}
      />
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
              to={`${data == null ? "" : data.site}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {screen > 600 ? (
                <img
                  src={data === null ? skeletonImage : data?.logo}
                  className={data === null ? "skeleton" : ""}
                  alt={data?.name}
                  id="navbar-logo"
                  style={{
                    borderRadius: "50%",
                    objectFit: "contain",
                    width: "10%",
                    height: "10%",
                    borderRadius: "10px",
                  }}
                />
              ) : (
                <AiOutlineMenu
                  className="menu-navbar"
                  color={navbarStyle.color}
                  style={{
                    marginBottom: navbar === "responsive" ? "-0%" : "-15%",
                  }}
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
          <div
            class="collapse navbar-collapse"
            id={`navbar-content${navbar}`}
            style={{
              background:
                data !== null ? data.website.websiteNavbarFooterColor : "white",
            }}
          >
            <div
              class="navbar-nav"
              id="nav-links"
              style={{
                color: navbarStyle.color,
                backgroundColor: navbarStyle.backgroundColor,
                border: "0px white solid",
              }}
            >
              <Link
                style={{ color: navbarStyle.color }}
                to={`${data == null ? "" : data.site}`}
                id="nav-link-home"
                class="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to={`${data == null ? "" : data.site}/produtos/all`}
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
                    `/${data == null ? "" : data.site}/produtos/${
                      e.target.value
                    }`
                  );
                }}
              >
                <option
                  style={{
                    color: navbarStyle.color,
                    backgroundColor: navbarStyle.backgroundColor,
                  }}
                >
                  Categorias
                </option>
                {data == undefined
                  ? ""
                  : data.categorias.map((list) => {
                      return (
                        <>
                          <option
                            style={{
                              color: navbarStyle.color,
                              backgroundColor: navbarStyle.backgroundColor,
                            }}
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
                id="nav-link-valores"
                class="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (costumer.logged) {
                    navigate(`${data == null ? "" : data.site}/profile`);
                  } else {
                    setModal("visible");
                  }
                }}
                style={{ color: navbarStyle.color }}
              >
                <AiOutlineUser />
              </Link>
            </div>
          </div>
          <div
            className="navbar-search"
            style={{
              display: navbar === "responsive" ? "none" : "block",
              visibility: navbar === "responsive" ? "hidden" : "visible",
            }}
          >
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
                    : "white",
                color:
                  data !== null ? data.website.websiteFontFooterColor : "white",
              }}
            >
              <ul className="navbar-search-result-list">
                {data !== null
                  ? data.produto.map((list, key) => {
                      if (list.product.includes(search) && search !== "") {
                        return (
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={`/produto/${list._id}/${data.site}`}
                          >
                            <div className="navbar-list-item">
                              <div className="row">
                                <div className="navbar-search-image">
                                  <img
                                    style={{
                                      border: "white",
                                    }}
                                    src={list.image}
                                    className="navbar-search-image-content"
                                  />
                                </div>
                                <div
                                  className="col"
                                  id="navbar-search-name-content"
                                >
                                  <p
                                    className="navbar-search-name-content-p"
                                    key={key}
                                    style={{
                                      color:
                                        data.website.websiteFontFooterColor,
                                    }}
                                  >
                                    {list.product}
                                  </p>
                                </div>
                                <div
                                  className="col"
                                  id="navbar-search-add-content"
                                >
                                  <button
                                    className="btn btn-success"
                                    id="navbar-search-name-content-button"
                                    onClick={() => {
                                      setCart([...cart, list]);
                                    }}
                                  >
                                    <BsCart4 color="white" />+
                                  </button>
                                  <AiFillHeart
                                    color={data.website.websiteHeartTagColor}
                                    size={20}
                                    style={{
                                      marginLeft: "47%",
                                      marginTop: "15%",
                                    }}
                                    onClick={() => {
                                      if (costumer.logged) {
                                        Api.post(
                                          "https://tamarintec.herokuapp.com",
                                          {
                                            empresa: data._id,
                                            email: costumer.email,
                                            product: list,
                                          }
                                        );
                                      } else {
                                        window.alert(
                                          "Entre em seu perfil para criar wishlist"
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                              <hr />
                            </div>
                          </Link>
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
                to={`${data == null ? "" : data.site}/cart`}
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
