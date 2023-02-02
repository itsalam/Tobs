import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { EVENTS } from "../../events";
import TabButton from "./TabButton";
import { ReactComponent as ReactLogo }  from "../../assets/logo.svg";

export function SettingsButton(props: {text: string} & any): JSX.Element {

    const onClick = async (): Promise<void> => {
        await chrome.runtime.sendMessage({ event: EVENTS.FILTER_TABS });
    }

    return <TabButton className="z-0 mt-2 ml-5 h-5/6 w-40 px-2" onClick={() => {void onClick()}}>
        <span className={"tab top-tab items-center bg-gray-700 opacity-70 shadow-gray-700"}>    
            <p className={"z-10 mt-0.5 flex items-center gap-2 overflow-hidden rounded-lg py-0.5 transition-colors"}>
                <div className="animated flex w-72 pl-2 group-hover:translate-x-[-50%]">
                    <div className="flex w-36 items-center justify-center gap-1 px-2">
                        Settings
                        <Cog8ToothIcon className="animated h-7 w-7 duration-300 ease-in-out" />
                    </div>
                    <div className="flex w-36 items-center justify-center gap-1 px-2">
                        X0RT
                        <ReactLogo  className='h-7 w-7'/>
                    </div>
                </div>
            </p>
            <div className="bottom-fill"/>
        </span>
        <span className={"tab bg-gray-700 opacity-40 mix-blend-lighten shadow-gray-700"}>
            <div className="bottom-fill"/>
        </span>
        <span className={"tab bottom-tab bg-gray-700 opacity-40 mix-blend-lighten shadow-gray-700"}>
            <div className="bottom-fill"/>
        </span>
    </TabButton>
}
