import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

export default function Buttons() {
  const [isSignedin, setIsSignedin] = useState(false);

  useEffect(() => {
    if (Cookie.get("token")) {
      setIsSignedin(true);
    }
  }, []);

  return (
    <div>
      {isSignedin ? (
        <div className="flex gap-4 mt-6">
          <ButtonPrimary>Dashboard</ButtonPrimary>
        </div>
      ) : (
        <div className="flex gap-4 mt-6">
          <ButtonPrimary>LOG In</ButtonPrimary>
          <ButtonSecondary link={"signup"}>SIGN UP</ButtonSecondary>
        </div>
      )}
    </div>
  );
}
