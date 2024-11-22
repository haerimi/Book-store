import React, { useState } from 'react';
import styled from 'styled-components';
import { BookDetail } from '../../models/book.model';
import InputText from '../common/InputText';
import Button from '../common/Button';
import { useBook } from '../../hooks/useBook';
import { Link } from 'react-router-dom';

interface Props {
    book: BookDetail;
}

function AddToCart({ book }: Props) {
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart, cartAdded } = useBook(book.id.toString());  // Assuming useBook is set correctly

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value > 0) {
            setQuantity(value);  // Ensure quantity is always positive
        }
    };

    const handleIncrese = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrese = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <AddToCartStyle $added={cartAdded}>
            <InputText inputType="number" value={quantity} onChange={handleChange} />
            <div>
                <Button size="medium" scheme="normal" onClick={handleIncrese}>
                    +
                </Button>
                <Button size="medium" scheme="normal" onClick={handleDecrese}>
                    -
                </Button>
            </div>
            <Button size="medium" scheme="normal" onClick={() => addToCart(quantity)}>
                장바구니 담기
            </Button>
            <div className="added">
                <p>장바구니에 추가되었습니다.</p>
                <Link to="/cart">장바구니로 이동</Link>
            </div>
        </AddToCartStyle>
    );
}

interface AddToCartStyleProps {
    $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
    display: flex;
    justify-content: space-between;  // Fix the typo here
    align-items: center;
    position: relative;

    .added {
        position: absolute;
        right: 0;
        bottom: -90px;
        background: ${({ theme }) => theme.color.background};
        border-radius: ${({ theme }) => theme.borderRadius.default};
        padding: 8px 12px;
        opacity: ${({ $added }) => ($added ? '1' : '0')};
        transition: opacity 0.5s ease;  // Smooth transition for opacity

        p {
            padding: 0 0 8px 0;
            margin: 0;
        }
    }
`;

export default AddToCart;
