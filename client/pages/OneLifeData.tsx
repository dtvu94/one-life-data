import React from 'react';
import { useLoaderData } from "react-router-dom";

const OneLifeData = () => {
  const data = useLoaderData();

  console.log('OneLifeData data: ', data);
  return (
    <div>Retrieve one life data</div>
  );
};

export default OneLifeData;
