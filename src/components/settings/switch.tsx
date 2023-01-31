import React, { type HTMLProps } from "react"
import { Switch} from "@headlessui/react"

export function SettingsSwitch(props: { options: Array<{name: string}>} & HTMLProps<HTMLDivElement>): JSX.Element{
    
  const [enabled, setEnabled] = React.useState(false)

    return <div {...props} className={`relative ${props.className != null? props.className : ""}`}>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
            enabled ? 'bg-gray-500' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 shrink-0 items-center cursor-pointer rounded-full transition-colors ease-in-out  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-200`}
        >
            <span
            className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
            />
        </Switch>
    </div>  
}
