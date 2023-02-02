import * as React from "react";
import { SettingsButton } from "./SettingsButton";

function Popup(): JSX.Element{

  return <div className="group peer flex h-12 w-min justify-start gap-2">
    <SettingsButton/>
  </div>
}

export default Popup;