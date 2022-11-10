import { useEffect, useState } from "react";

export const Message = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseEvent = ({ x, y }) => {
      setCoord({ x, y });
    };

    window.addEventListener("mousemove", onMouseEvent);
    console.log("Message mounted");

    return () => {
      window.removeEventListener("mousemove", onMouseEvent);
      console.log("Message unmounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>{JSON.stringify(coord)}</p>
    </>
  );
};
