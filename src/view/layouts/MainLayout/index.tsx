import React, { useEffect, useState } from "react";
import Navigation from "../../navigation";
import { Box } from "@mui/material";
import Authentication from "../../Authentication";
import BoardMain from "../BoardMain";
import { useMemberStore } from "../../../stores";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Simulate } from "react-dom/test-utils";


const MainLayout = () => {
  const [boardResponse, setBoardResponse] = useState<string>("");
  const [cookies] = useCookies();
  const { member } = useMemberStore();
  const getBoard = async (accessToken: string) => {
    const requestOption = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };
    await axios.get('http://localhost:4000/api/board/', requestOption)
        .then((response) => {
            setBoardResponse(response.data);
            console.log(!!boardResponse)
        })
        .catch((error) => console.log(error));
  };
  useEffect(() => {
    const accessToken = cookies.accessToken;
    if (accessToken) {
      getBoard(accessToken);
    } else {
        setBoardResponse('');
    }
  }, [cookies.accessToken]);
  return (
    <>
      <Navigation />
        {boardResponse ? (<BoardMain />) : (<Authentication />)}
    </>
  );
};

export default MainLayout;
