import React, { useState } from "react";
import { clsx } from "clsx";

const DeployHook: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  const cliclHandler = async () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 60 * 1000 * 2);

    const res = await fetch(
      "https://api.vercel.com/v1/integrations/deploy/prj_PpNZBZGRQkFOKQkNj3JMidTDabNq/iNabBQ1T4P",
      {
        method: "POST",
      }
    );
    const data = await res.json();
  };

  return (
    <div className="deployHook">
      <button
        disabled={disabled}
        onClick={cliclHandler}
        className={clsx(
          {
            "deployHook__btn--disabled": disabled,
          },
          "btn btn--style-primary btn--size-small deployHook__btn"
        )}
      >
        Redeploy Website
      </button>
      {disabled && <div className="">You can redeploy in 2 minutes</div>}
    </div>
  );
};

export default DeployHook;
