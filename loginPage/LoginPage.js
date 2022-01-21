/**
* Component to user Login Page.
* 
* Author : Arif
*/
import React from 'react';
import {
    Box,
    Grid,
    Typography,
} from "@mui/material";
import styled from "styled-components";
import useLoginLabel from './../../../../global/labels/LoginLabels';
import ErrorMsgAlert from './../../../../components/ErrorMsgAlert';
import SuccessMsgAlert from './../../../../components/SuccessMsgAlert';
import SpinLoader from './../../../../components/SpinLoader';
import { loginProperties } from './../../../../global/properties/Login';
import { useHistory } from 'react-router-dom';



const MainContainer = styled(Box)`
     & {
       margin-bottom: 30px;
       padding: 0;
       font-family: Poppins;
     },
     `
const InnerTopConatiner = styled(Box)`
background:#740d12;
height:190px;
`

const ImageBox = styled(Box)`
display:flex;
justify-content: center;
& img{
    width:200px;
    margin-top:40px;
}
`

const FormContainer = styled(Box)`
box-sizing: border-box;
     min-height: 550.5px;
     border: 1.5px solid #EBECF1;
     border-top-left-radius: 36px;
     border-top-right-radius: 36px;
     background:#fff;
     position: relative;
    top: -25px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);

    & .inputForm{
        width: 100%;
    height: 46px;
    border-radius: 12px;
    border: 1.5px solid #ebecf1;
   color: #2C333A;
   font-family: Poppins;
   font-size: 14px;
   font-weight: 500;
   letter-spacing: 0;
   line-height: 21px;
   padding:2px 0 0 13px;
   &:hover{
    border:2px solid #d53434;
    outline:none;
}
&:focus{
    border:2px solid #d53434;
    outline:none;
}  
}

& .otpField{
    position: relative;
    left: 80%;
    top: -34px;
    font-size: 13px;
    color: #ff0000b3;
    cursor:pointer;
}

& .forgetPassword{
    position: relative;
    left: 49%;
    font-size: 13px;
    top: 8px;
    cursor:pointer;
}

`
const InputHedaing = styled(Typography)`
opacity: 0.5;
     color: #2C333A;
     font-family: Poppins;
     font-size: 13px;
     font-weight: 500;
     letter-spacing: 0;
     line-height: 18px;
     margin-bottom:9px;
  `

const SubmitStyledBtn = styled(Box)`
& .btn{
    box-sizing: border-box;
    height: 45px;
    width: 100%;
    border-radius: 25px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  transition: background-color 300ms linear, color 300ms linear, border 300ms linear;
}

& .btn-submit{
    background: #A9001F;
    border:none;
    color: #FFFFFF;
}

& .btn-active{
   background: #A9001F;
   color: #FFFFFF;
   cursor:pointer;
   &:hover
   {
       background:#FFF;
       color:#B90015;
       border:1.75px solid #B90015;
   }
}


@media (max-width:667px){
   & .btn{
       width:100px;
   }
}
`

function LoginPage(props) {
    const history = useHistory()
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const loginLabel = useLoginLabel();
    const [isUser, setIsUser] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [successMsg, setSuccessMsg] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsUser(false);
    };

    const handleClose1 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsPassword(false);
    };

    const handleClose2 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessMsg(false);
    };

    const handleSubmission = () => {
        if (!user) {
            setIsUser(true);
            return
        }
        if (!password) {
            setIsPassword(true);
            return
        }
        else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setUser("")
                setPassword("")
                setSuccessMsg(true)
            }, 3000)
        }
    }

    return (
        <MainContainer>

            {loading ? <SpinLoader /> : null}
            {isUser ? <ErrorMsgAlert msgText={loginProperties.errorUserMsg} click={handleClose} /> : null}
            {isPassword ? <ErrorMsgAlert msgText={loginProperties.errorPasswordMsg} click={handleClose1} /> : null}
            {successMsg ? <SuccessMsgAlert msgText={loginProperties.successMsg} click={handleClose2} /> : null}

            <InnerTopConatiner container >
                <Grid item xs={12} >
                    <ImageBox>
                        <img src={logo}  />
                    </ImageBox>
                </Grid>
            </InnerTopConatiner>

            <FormContainer container >
                <Grid item xs={12} >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                        <h1>DSA Login</h1>
                    </Box>
                </Grid>

                <Grid container mt={1}>
                    <Grid sm={4}></Grid>
                    <Grid sm={4}>
                        <Box>
                            <InputHedaing>{loginLabel.screenLables.userId}<span style={{ color: 'red' }}>*</span></InputHedaing>
                            <input type="text" className="inputForm" value={user} onChange={(e) => setUser(e.target.value)} />
                        </Box>

                        <Box mt={3}>
                            <InputHedaing>{loginLabel.screenLables.password}<span style={{ color: 'red' }}>*</span></InputHedaing>
                            <input type="password" className="inputForm" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="otpField" onClick={()=>history.push("/otp")}>{loginLabel.fieldsLabel.useOtp}</span>
                            <span className="forgetPassword" onClick={()=>history.push("/forgotPassword")}>{loginLabel.screenLables.forgotPassword}</span>
                        </Box>
                        <Box mt={6}>
                            <SubmitStyledBtn>
                                <button className="btn btn-submit btn-active" onClick={handleSubmission}>{loginLabel.btnLabels.login}</button>
                            </SubmitStyledBtn>
                        </Box>
                    </Grid>
                </Grid>
            </FormContainer>

        </MainContainer>
    );
}

export default LoginPage;