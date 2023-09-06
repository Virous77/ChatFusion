"use client";

import { useQuery } from "@tanstack/react-query";

export const useFetch = ({
  action,
  key,
}: {
  action: () => void;
  key: string;
}) => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [key],
    queryFn: action,
  });

  return { data, isFetching, isLoading, error };
};
