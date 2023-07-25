import React, { useEffect, useState } from "react";
import Navigation from "../../navigation";
import { Box } from "@mui/material";
import Authentication from "../../Authentication";
import BoardMain from "../BoardMain";
import { useMemberStore } from "../../../stores";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import * as timers from "timers";

const MainLayout = () => {
  const [boardResponse, setBoardResponse] = useState<string>("");
  const [cookies] = useCookies();
  const { member } = useMemberStore();
  const getBoard = async (token: string) => {
    const response = await axios
      .get("http://localhost:4000/api/board", {
          headers: {
              Authorization:
          }
      })
      .then((response) => {
          setBoardResponse(response.data);
      })
      .catch((error) => null);
  };
  useEffect(() => {
    const token = cookies.token;
    if (token) getBoard(token);
  }, [member]);
  return (
    <>
      <Navigation />
        {boardResponse ? (<BoardMain />) : (<Authentication />)}
    </>
  );
};

export default MainLayout;
