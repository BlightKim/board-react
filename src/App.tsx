import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import SignUp from "./view/Authentication/SignUp";
import Authentication from "./view/Authentication";
import MainLayout from "./view/layouts/MainLayout";

function App() {
  return (
      <MainLayout />
  );
}

export default App;
