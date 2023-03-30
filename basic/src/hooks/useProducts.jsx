import { useEffect, useState } from 'react';

export default function useProducts({ saleOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${saleOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('뜨끈한 데이터를 잘 받아옴.');
        setProducts(data);
      })
      .catch((error) => {
        setError('에러가 발생했음!');
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [saleOnly]);

  return [loading, error, products];
}
