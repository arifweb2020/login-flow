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
import image from "./../../../../assets/images/updatePassword.PNG"
import SuccessMsgAlert from '../../../../components/SuccessMsgAlert';
import ErrorMsgAlert from '../../../../components/ErrorMsgAlert';
import SpinLoader from '../../../../components/SpinLoader';
import { loginProperties } from '../../../../global/properties/Login';
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
     min-height: 680.5px;
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

& .viewPassword{
    position: relative;
    left: 85%;
    top: -34px;
    font-size: 13px;
    color: #ff0000b3;
    cursor:pointer;
}

& .backArrow{
    position: relative;
    left: 33%;
    top: 58px;
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

function UpdatePasswordPage() {
    const history = useHistory()
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmPassword] = React.useState("");
    const [isError, setError] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [iscurrentPassword, setIscurrentPassword] = React.useState(false);
    const [passLength, setPassLength] = React.useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = React.useState(false);
    const [successMsg, setSuccessMsg] = React.useState(false);
    const [loading, setLoading] = React.useState(false)
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessMsg(false);
    };

    const handleClose1 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    const handleClose2 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsPassword(false);
    };

    const handleClose3 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsConfirmPassword(false);
    };

    const handleClose4 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setPassLength(false);
    };

    const handleClose5 = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIscurrentPassword(false);
    };

    const handleClick = () => setShow(!show);
    const handleClick1 = () => setShow1(!show1);
    const handleClick2 = () => setShow2(!show2);

    const handleSubmission = () => {
        if (!currentPassword) {
            return setIscurrentPassword(true);
        }
        if (!password) {
            return setIsPassword(true);
        }
        if (password.length <= 7) {
            return setPassLength(true);
        }
        if (!confirmpassword) {
            return setIsConfirmPassword(true);
        }
        if (password !== confirmpassword) {
            return setError(true);
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSuccessMsg(true)
        }, 3000)

        setTimeout(() => {
            history.push("/login")
        }, 5000)

    }

    return (
        <MainContainer>

            {loading ? <SpinLoader /> : null}
            {successMsg ? <SuccessMsgAlert msgText="your password is updated successfully" click={handleClose} /> : null}
            {isError ? <ErrorMsgAlert msgText="sorry your password is not matching" click={handleClose1} /> : null}
            {isPassword ? <ErrorMsgAlert msgText="please enter your password" click={handleClose2} /> : null}
            {iscurrentPassword ? <ErrorMsgAlert msgText="please enter correct current password" click={handleClose5} /> : null}
            {passLength ? <ErrorMsgAlert msgText="password must be 8 character" click={handleClose4} /> : null}
            {isConfirmPassword ? <ErrorMsgAlert msgText="please enter your confirm password" click={handleClose3} /> : null}

            <InnerTopConatiner container >
                <Grid item xs={12} >
                    <ImageBox>
                        <img src={logo} />
                    </ImageBox>
                </Grid>
            </InnerTopConatiner>

            <FormContainer container >
                <Grid item xs={12} >
                    <span className="backArrow" onClick={() => history.push("/otp")}>{"<"}</span>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
                        <h3>Update Password</h3>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <img src={image} alt="forgot password" />
                    </Box>
                </Grid>

                <Grid container mt={2}>
                    <Grid sm={4}></Grid>
                    <Grid sm={4}>
                        <Box>
                            <InputHedaing >Current Password<span style={{ color: 'red' }}>*</span></InputHedaing>
                            <input type={show ? "text" : "password"} className="inputForm" value={currentPassword} maxlength="15" onChange={(e) => setCurrentPassword(e.target.value)} />
                            <span className="viewPassword" onClick={handleClick}>{show ? "Hide" : "Show"}</span>
                        </Box>
                        <Box mt={3}>
                            <InputHedaing>New Password<span style={{ color: 'red' }}>*</span></InputHedaing>
                            <input type={show1 ? "text" : "password"} className="inputForm" value={password} maxlength="15" onChange={(e) => setPassword(e.target.value)} />
                            <span className="viewPassword" onClick={handleClick1}>{show1 ? "Hide" : "Show"}</span>
                        </Box>
                        <Box mt={3}>
                            <InputHedaing>Confirm Password<span style={{ color: 'red' }}>*</span></InputHedaing>
                            <input type={show2 ? "text" : "password"} className="inputForm" value={confirmpassword} maxlength="15" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <span className="viewPassword" onClick={handleClick2}>{show2 ? "Hide" : "Show"}</span>
                        </Box>
                        <Box mt={6}>
                            <SubmitStyledBtn>
                                <button className="btn btn-submit btn-active" onClick={handleSubmission}>Confirm</button>
                            </SubmitStyledBtn>
                        </Box>
                    </Grid>
                </Grid>
            </FormContainer>

        </MainContainer>
    );
}

export default UpdatePasswordPage;