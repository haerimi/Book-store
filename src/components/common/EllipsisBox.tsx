import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button';
import { FaAngleDown } from 'react-icons/fa';

interface Props {
    children: React.ReactNode;
    linelimit: number;
}

function EllipsisBox({ children, linelimit }: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <EllipsisBoxStyle linelimit={linelimit} $expanded={expanded}>
            <p>{children}</p>
            <div className="toggle">
                <Button size='small' scheme='normal' onClick={() => setExpanded(!expanded)}>
                    {expanded ? "접기" : "펼치기"} <FaAngleDown />
                </Button>
            </div>
        </EllipsisBoxStyle>
    )
}

interface EllipsisBoxStyleProps {
    linelimit: number;
    $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
    p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${({ linelimit, $expanded }) =>
            ($expanded ? 'none' : linelimit)};
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 20px 0 0 0;
        margin: 0;
    }

    .toggle {
        display: flex;
        justify-content: flex-end;  // 'end' 대신 'flex-end'로 수정
        svg {
            transform: ${({ $expanded }) =>
                ($expanded ? 'rotate(180deg)' : 'rotate(0)')};
            transition: transform 0.3s ease; // 아이콘 회전 애니메이션 추가
        }
    }
`;

export default EllipsisBox;
