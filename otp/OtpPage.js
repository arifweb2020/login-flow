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
import otpImage from "./../../../../assets/images/otpscreen.PNG"
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
   font-size: 16px;
   font-weight: 500;
   letter-spacing: 0;
   line-height: 21px;
   padding-left:112px;
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
}

& .forgetPassword{
    position: relative;
    left: 49%;
    font-size: 13px;
    top: 8px;
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
    background: linear-gradient(135deg, #B2BEC3 0%, #A4B0BA 100%);
    border:none;
    color: #FFFFFF;
    &:disabled {
        cursor: not-allowed;
        pointer-events: all !important;
      }
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

function LoginPage() {
    const history = useHistory()
    const [otp, setOtp] = React.useState("");
    const [successMsg, setSuccessMsg] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessMsg(false);
    };

    const handleSubmission = () => {

            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setSuccessMsg(true)
                history.push("/resetPassword")
            }, 3000)
        
    }

    return (
        <MainContainer>

            {loading ? <SpinLoader /> : null}
            {successMsg ? <SuccessMsgAlert msgText={loginProperties.successMsg} click={handleClose} /> : null}

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
                        <h3>Enter OTP</h3>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <img src={otpImage} alt="enter otp" />
                    </Box>
                </Grid>

                <Grid container mt={2}>
                    <Grid sm={4}></Grid>
                    <Grid sm={4}>
                        <Box>
                            <InputHedaing style={{ textAlign: 'center', marginBottom: '20px' }}>Enter one time password (OTP) send to your number 9876543210</InputHedaing>
                            <input type="text" className="inputForm" value={otp} maxlength="6" onChange={(e) => setOtp(e.target.value)} />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            m: 1,
                            bgcolor: 'background.paper',
                        }}>
                            <p style={{ color: 'grey' }}>01m 54s</p>
                            {otp.length === 6 ?
                                <p style={{ color: '#A9001F', cursor:'pointer' }} onClick={()=>alert("Resend OTP")}>Resend OTP</p> :
                                <p style={{ color: '#a8b4bc' }}>Resend OTP</p>
                            }
                        </Box>
                        <Box mt={6}>
                            {otp.length === 6 ?
                                <SubmitStyledBtn>
                                    <button className="btn btn-submit btn-active" onClick={handleSubmission}>Confirm</button>
                                </SubmitStyledBtn> :
                                <SubmitStyledBtn>
                                    <button className="btn btn-submit" disabled>Confirm</button>
                                </SubmitStyledBtn>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </FormContainer>

        </MainContainer>
    );
}

export default LoginPage;