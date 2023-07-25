import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { signUpApi } from "../../../apis";

interface Props {
  setAuthView: (authView: boolean) => void;
}
const SignUp = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const { setAuthView } = props;
  const signUpHandler = async () => {
    const data = {
      email,
      password,
      passwordCheck,
      nickname,
      phoneNumber,
      address,
      addressDetail,
    };

    const signUpResponse = await signUpApi(data);

    if (!signUpResponse) {
      alert("회원가입에 실패했습니다.");
      return;
    }

    if (!signUpResponse.result) {
      alert("회원가입에 실패했습니다.");
      return;
    }
    alert('회원가입에 성공했습니다.');
    setAuthView(false);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
      <Box>
        <Typography variant="h5">회원가입</Typography>
      </Box>
      <Box height={"50vh"}>
        <TextField
          fullWidth
          label="이메일 주소"
          type="email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          type="password"
          label="비밀번호"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          type="password"
          label="비밀번호 확인"
          variant="standard"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <TextField
          fullWidth
          label="닉네임"
          variant="standard"
          onChange={(e) => setNickname(e.target.value)}
        />
        <TextField
          fullWidth
          label="휴대폰 번호"
          variant="standard"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          fullWidth
          label="주소"
          variant="standard"
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          fullWidth
          label="상세주소"
          variant="standard"
          onChange={(e) => setAddressDetail(e.target.value)}
        />
      </Box>
      <Box width={"100%"} component="div">
        <Button fullWidth onClick={() => signUpHandler()} variant="contained">
          회원가입
        </Button>
      </Box>
      <Box component="div" display="flex" mt={2}>
        <Typography>이미 계정이 있으신가요?</Typography>
        <Typography
          ml={1}
          onClick={() => {
            setAuthView(false);
          }}
          fontWeight={800}
        >
          로그인
        </Typography>
      </Box>
    </Card>
  );
};

export default SignUp;
