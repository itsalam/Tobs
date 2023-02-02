import * as React from "react";
import { EVENTS } from "../../events";
import TabButton from "./TabButton";
import { ReactComponent as ReactLogo }  from "../../assets/logo.svg";

export function CompressButton(): JSX.Element {

    const onClick = async (): Promise<void> => {
        await chrome.runtime.sendMessage({ event: EVENTS.FILTER_TABS });
    }

    return <TabButton onClick={() => {void onClick()}} className="z-10 mt-2 h-12 w-40">
        <span className={"tab items-center bg-gray-700 opacity-60 shadow-gray-700"}>
            <p className={"z-10 flex items-center gap-2 rounded-lg py-0.5 px-7 transition-colors group-hover:bg-white/[0.24] group-hover:outline-none group-hover:ring-4 group-hover:ring-gray-400/5 "}>
                X0RT
                <ReactLogo  className='h-7 w-7'/>
            </p>
            <div className="bottom-fill left-[-11.75rem]"/>
        </span>
    </TabButton>
}
