import React from 'react'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import styled from 'styled-components'

interface Props {
    isChecked: boolean;
    onCheck: () => void;
}
function CheckIconButton({isChecked, onCheck}: Props) {
  return (
    <CheckIconButtonStyle onClick={onCheck}>
        {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}          
    </CheckIconButtonStyle>
  )
}

const CheckIconButtonStyle = styled.div``;
export default CheckIconButton
