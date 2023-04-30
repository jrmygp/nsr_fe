/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import Image from "next/image";

import classes from "./Layout.module.css";
import logo from "../../public/Images/logo.png";

const Layout = ({ children }) => {
  return (
    <div className={classes["layout-wrapper"]}>
      <section className={classes.navbar}>
        <Image
          src={logo}
          height={45}
          width={45}
          className={classes.logo}
          alt="Night Soldier"
        />
      </section>
      <main className={classes["main-content"]}>{children}</main>
      <section className={classes.footer}>Footer</section>
    </div>
  );
};

export default Layout;
