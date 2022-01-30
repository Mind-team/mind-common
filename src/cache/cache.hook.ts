import { useState } from "react";

export const useCache = () => {
  const [cache, setCache] = useState<Record<string, unknown>>({});

  const save = (key: string, value: any) => {
    setCache({ ...cache, key: value });
  };

  const read = (key: string): any => {
    return key in cache ? cache[key] : null;
  };

  return { save, read };
};
