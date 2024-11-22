import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import { SignupProps } from "@/pages/Singup";
import { useState } from "react";

export const useAuth = () => {
    // 로그인
    // 상태
    const navigate = useNavigate();
    const {showAlert} = useAlert();
    const { isLoggedIn, storeLogin, storeLogout } = useAuthStore();

    // 메소드
    const userLogin = (data: LoginProps) => {
        login(data).then((res) => {
            // 상태 변화
            storeLogin(res.token);
            showAlert("로그인이 완료되었습니다.");
            navigate("/")
        }, (error) => {
            showAlert("로그인이 실패했습니다.");
        })
    }

    // 회원가입
    const userSigup = (data: SignupProps) => {
        signup(data).then((res) => {
            //성공
            showAlert('회원 가입이 완료되었습니다.');
            navigate('/login');
        });
    }
    
    // 비밀번호 초기화
    const userResetPassword = (data: SignupProps) => {
       //초기화
       resetPassword(data).then(() => {
            showAlert('비밀번호 초기화되었습니다.');
            navigate('/login');
        });
    }

    const [resetRequested, setResetRequested] = useState(false);

    // 비밀번호 변경 요청
    const usersRestRequest = (data: SignupProps) => {
         // 요청
         resetRequest(data).then(() => {
            setResetRequested(true);
        })
    }
    //리턴
    return { userLogin, userSigup, userResetPassword, usersRestRequest, resetRequested }; 
}