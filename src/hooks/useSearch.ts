import { useCallback, useEffect, useMemo, useState } from "react";

const useSearch = (searchValue: string, data: string[]) => {
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const filterData = useCallback(() => {
    if (!searchValue) return [];

    const result = data.filter((city) => {
      return city.toLowerCase().includes(searchValue.toLowerCase());
    });

    return result;
  }, [data, searchValue]);

  useEffect(() => {
    const data = filterData();

    setFilteredData(data);
  }, [filterData, searchValue]);

  return useMemo(() => {
    return filteredData;
  }, [filteredData]);
};

export default useSearch;
