import { styled } from 'styled-components'
import { ButtonScheme, ButtonSize } from '../../style/theme';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    button?: 'button' | 'submit' | 'reset'; 
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    onClick?: () => void;
    isLoading?: boolean;
}

function Button({type = 'button', onClick, children, size, scheme, disabled, isLoading }: Props) {
  return (
    <ButtonStyle type={type} onClick={onClick} size={size} scheme={scheme}
    disabled={disabled} isLoading={isLoading}>{children}</ButtonStyle>
  )
}
//${({ theme, $scheme }) => theme.buttonScheme[$scheme].color};
//${({ theme, $scheme }) => theme.buttonScheme[$scheme].backgroundColor};

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
    font-size: ${({ theme, size }) => theme.button[size].fontSize};
    padding: ${({ theme, size }) => theme.button[size].padding};
    color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
    background-color: ${({theme, scheme}) => theme.buttonScheme[scheme].backgroundColor};
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    `;
export default Button
