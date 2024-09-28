import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <h1>
      This is the home page
      <p>{data?.fact}</p>
    </h1>
  );
}
