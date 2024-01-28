import React, { useEffect } from 'react'
import { base_Api_url } from './constant'
import { useDispatch } from 'react-redux'
import { addCoffeeData } from './ProductSlice';

const useFetchProductData = () => {
  const dispatch = useDispatch();
  const getCoffeeData = async () => {
    const data = await fetch(base_Api_url)
    const json = await data.json();
    dispatch(addCoffeeData(json));
  }
  useEffect(() => {
    getCoffeeData();
  }, [])

}

export default useFetchProductData