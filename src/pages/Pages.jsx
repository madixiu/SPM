import { useRef, useEffect } from "react";
import A4Page from "../components/A4Page";

function Pages({ children, passA4Ref }) {
  const a4Ref = useRef(null);

  useEffect(() => {
    passA4Ref(a4Ref.current);
  }, [passA4Ref]);



  return (
    <div className="flex flex-row h-full items-center justify-center">
      <div ref={a4Ref}>
        <A4Page>{children}</A4Page>
      </div>
    </div>
  );
}

export default Pages;
