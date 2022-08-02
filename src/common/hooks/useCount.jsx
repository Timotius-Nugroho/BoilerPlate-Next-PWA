import { useState } from "react";

const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return {
    count,
    inc,
    dec,
  };
};

export default useCount;
