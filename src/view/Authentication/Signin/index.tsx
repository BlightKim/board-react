import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUpHandler = () => {

  }
  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
      <CardContent>
        <Box>
          <TextField
            fullWidth
            label="이메일"
            type="email"
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="비밀번호"
            type="password"
            variant="standard"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          onClick={() => signUpHandler()}
          variant="contained"
        >로그인</Button>
      </CardActions>
    </Card>
  );
};

export default SignIn;
