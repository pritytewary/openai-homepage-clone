import { useEffect, useState } from "react";

export default function counter() {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      subscribed: {value}
      <br />
      <button
        type="button"
        onClick={() => {
          setvalue(value + 1);
        }}
      >
        click
      </button>
    </div>
  );
}
