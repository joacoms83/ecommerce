// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px", 
      backgroundColor: "#f8f8f8" 
    }}>
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>MiTienda</div>

      {/* Enlaces */}
      <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;