import { useEffect, useState } from 'react';
import { fetchCategory } from '../api/category.api';
import { Category } from '../models/category.model';
import { useLocation } from 'react-router-dom'; // React Router 사용 시 location 훅

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const location = useLocation();  // location 훅을 통해 URL 쿼리 파라미터에 접근

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("category_id");

    if (categoryId) {
      setCategory((prev) =>
        prev.map((item) => ({
          ...item,
          isActive: item.id === Number(categoryId),
        }))
      );
    } else {
      setCategory((prev) =>
        prev.map((item) => ({
          ...item,
          isActive: false,
        }))
      );
    }
  };

  useEffect(() => {
    fetchCategory()
      .then((categoryData) => {
        if (!categoryData) return;

        // 기본 카테고리 목록과 서버에서 받은 카테고리 데이터를 합침
        const categoryWithAll = [
          {
            id: null,
            name: '전체',
          },
          ...categoryData, // 서버에서 받아온 카테고리 데이터 추가
          {
            id: 0,
            name: '동화',
          },
          {
            id: 1,
            name: '소설',
          },
          {
            id: 2,
            name: '사회',
          },
        ];

        setCategory(categoryWithAll);
      })
      .catch((error) => {
        console.error("Category fetch error:", error);
      });
  }, []); // 페이지 로드 시 한 번만 호출

  // location.search가 변경될 때마다 setActive 호출
  useEffect(() => {
    if (category.length > 0) {
      setActive();
    }
  }, [location.search, category]); // location.search 또는 category가 변경되면 호출

  return { category };
};
