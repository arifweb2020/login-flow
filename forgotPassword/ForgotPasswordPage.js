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

import image from "./../../../../assets/images/forgetPassword.PNG"
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

& .backArrow{
    position: relative;
    left: 33%;
    top: 81px;
    font-size: 23px;
    height: 31px;
    width: 31px;
    background-color: #740d12;
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    padding-left: 8px;
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

function ForgotPasswordPage() {
    const history = useHistory()
    const [phn, setPhn] = React.useState("");
    const [successMsg, setSuccessMsg] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const handleMobileNumber = (e) => {
        if(e.target.value>='0' && e.target.value<='9' ) setPhn(e.target.value);
   }

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
                history.push("/otp")
            }, 3000)
        
    }

    return (
        <MainContainer>

            {loading ? <SpinLoader /> : null}
            {successMsg ? <SuccessMsgAlert msgText={loginProperties.successMsg} click={handleClose} /> : null}

            <InnerTopConatiner container >
                <Grid item xs={12} >
                    <ImageBox>
                        <img src={logo} />
                    </ImageBox>
                </Grid>
            </InnerTopConatiner>

            <FormContainer container >
                <Grid item xs={12} >
                    <span className="backArrow" onClick={()=>history.push("/login")}>{"<"}</span>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                        <h3>Forgot Password</h3>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <img src={image} alt="forgot password" />
                    </Box>
                </Grid>

                <Grid container mt={2}>
                    <Grid sm={4}></Grid>
                    <Grid sm={4}>
                        <Box>
                            <InputHedaing >Mobile Number<span style={{ color: 'red' }}>*</span></InputHedaing>
                            <input type="text" className="inputForm" value={phn} maxlength="10" onChange={handleMobileNumber} />
                        </Box>
                        <Box mt={6}>
                            {phn.length === 10 ?
                                <SubmitStyledBtn>
                                    <button className="btn btn-submit btn-active" onClick={handleSubmission}>Get OTP</button>
                                </SubmitStyledBtn> :
                                <SubmitStyledBtn>
                                    <button className="btn btn-submit" disabled>Get OTP</button>
                                </SubmitStyledBtn>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </FormContainer>

        </MainContainer>
    );
}

export default ForgotPasswordPage;
