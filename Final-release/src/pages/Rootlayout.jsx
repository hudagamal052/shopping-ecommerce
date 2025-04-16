

import React from "react"
import Navbar from "../components/navbar"
import { Outlet } from "react-router-dom"
import Footerofproducts from "../components/footerofproducts"

function Rootlayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet ></Outlet>
      <Footerofproducts/>
    </>)
}
export default Rootlayout