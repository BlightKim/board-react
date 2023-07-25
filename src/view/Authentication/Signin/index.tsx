import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { useCookies } from "react-cookie";
import userStore from "../../../stores/member.store";
import { useMemberStore } from "../../../stores";
import {signInApi} from "../../../apis";

interface Props {
  setAuthView: (authView: boolean) => void;
}
const SignIn = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cookies, setCookies] = useCookies();
  const { member, setMember } = useMemberStore();
  const { setAuthView } = props;
  const signInHandler = async () => {
    if (email.length === 0 || password.length === 0) {
      alert("이메일과 비밀번호를 입력하세요");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    const signInResponse = await signInApi(data);


    if (!signInResponse) {
      alert("로그인에 실패했습니다");
      return;
    }

    if (!signInResponse.result) {
      alert("로그인에 실패했습니다");
      return;

    }

    const { accessToken, tokenExpiresIn, member } = signInResponse.data;
    const expires = new Date();
    expires.setMilliseconds(expires.getMilliseconds() + tokenExpiresIn);

    setCookies("accessToken", accessToken, { expires });
    setMember(member);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
      <Box>
        <Typography variant="h5">로그인</Typography>
      </Box>
      <Box height={"50vh"}>
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
      <Box width={"100%"} component="div">
        <Button fullWidth onClick={() => signInHandler()} variant="contained">
          로그인
        </Button>
      </Box>
      <Box component="div" display="flex" mt={2}>
        <Typography>신규 사용자 이신가요?</Typography>
        <Typography
          ml={1}
          onClick={() => {
            setAuthView(true);
          }}
        >
          회원가입
        </Typography>
      </Box>
    </Card>
  );
};

export default SignIn;
