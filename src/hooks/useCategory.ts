import { useEffect, useState } from 'react';
import { fetchCategory } from '../api/category.api';
import { Category } from '../models/category.model';

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory()
      .then((category) => {
        if (!category) return;

        // 기본 카테고리 목록과 서버에서 받은 카테고리 데이터를 합침
        const categoryWithAll = [
          {
            id: null,
            name: '전체',
          },
          ...category, // 서버에서 받아온 카테고리 데이터 추가
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
  }, []);

  return { category };
};

