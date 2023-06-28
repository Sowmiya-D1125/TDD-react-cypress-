import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { configAxios } from "../utils/AxiosConfig";
import { LoginWrapper, Input, LoginCard, LoginBtn, ErrorText } from './Login.style';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const [pswdError, setPswdError] = useState<boolean>(false);
    const handleLogin = async () => {
        if (email && password) {
            var params = {
                email: email,
                password: password
            }
            const response = await fetch("http://localhost:5000/CustomerDetails/login", {
                method: "post",
                body: JSON.stringify(params),
                headers: {
                    "Content-type": "application/json"
                },
            });

            const data = await response.json();
            console.log(data)
            if(data.hasError){
                setErrorText(data.message);
                setIsError(true);
            }
            else{
                setIsError(false);
                localStorage.setItem('token', JSON.stringify({ "accessKey": data.accesstoken }))
                navigate('/user')

            }
            // if (data.hasError) {
            //     setErrorText(data.message);
            //     setIsError(data.hasError);
            // }
            // if (data.statusCode === 200) {
            //     localStorage.setItem('token', JSON.stringify({ "accessKey": data.accesstoken }))
            //     navigate('/user')
            // }
            // configAxios
            //     .post("CustomerDetails/login",params)
            //     .then((res: any) => {
            //         if (res.status === 200) {
            //             console.log(res)
            //         }
            //         if (res.data.hasError) {
            //             setErrorText(res.data.message);
            //             setIsError(res.data.hasError);
            //         }
            //         if(res.data.statusCode === 200){
            //             localStorage.setItem('token', JSON.stringify({"accessKey":res.data.accesstoken}))
            //             navigate('/user')
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     });
        }
        else if (email === "" && password === "") {
            setEmailError(true);
            setPswdError(true);
        }
        else if (email === "") {
            setEmailError(true);
        }
        else {
            setPswdError(true);
        }
    }

    return (
        <LoginWrapper>
            <LoginCard>
                <h3>Login</h3>
                <ErrorText data-testid="errmsg" isError={isError}>{errorText}</ErrorText>

                <Input data-testid="email" value={email} type="email" name="email"
                    onChange={(e) => {
                        setIsError(false);
                        setEmail(e.target.value);
                        setEmailError(false);
                    }} placeholder="Email" />
                <ErrorText isError={emailError}>This is required field</ErrorText>
                <Input data-testid="password" value={password} name="password"
                    onChange={(e) => {
                        setIsError(false);
                        setPassword(e.target.value);
                        setPswdError(false);
                    }} type="text" placeholder="Password" />
                <ErrorText isError={pswdError}>This is required field</ErrorText>

                <LoginBtn data-testid="sigin-in-btn" onClick={() => handleLogin()} disabled={email === "" || password === ""}>Sign-In</LoginBtn>

            </LoginCard>
        </LoginWrapper>
    )
}
export default Login;