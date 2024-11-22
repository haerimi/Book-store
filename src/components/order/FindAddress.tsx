import React, { useEffect } from 'react'
import Button from '../common/Button'
import styled from 'styled-components'

interface Props {  
    onCompleted: (address: string) => void;
}

const SCRIPT_URL = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

function FindAddress({onCompleted}: Props) {

    // 스크립틀 로드

    // 핸들러
    const handleOpen  = () => {
        new window.daum.Postcode({
            oncomplete: (data: any) => {
                onCompleted(data.address as string);
            }
        }).open();
    }

    // 입력
    useEffect(() => {
        const script = document.createElement("script");
        script.src = SCRIPT_URL;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        }
    }, [])
  return (
    <Button type='button' size='medium' scheme='normal' onClick={handleOpen}>
        주소찾기
    </Button>
  )
}

const FindAddressStyle = styled.div``;

export default FindAddress
