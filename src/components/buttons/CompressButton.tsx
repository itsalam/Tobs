import { RectangleStackIcon } from '@heroicons/react/20/solid';
import * as React from 'react';
import { EVENTS } from '../../events';
import TabButton from './TabButton';

export function CompressButton(): JSX.Element {

    const onClick = async (): Promise<void> => {
        await chrome.runtime.sendMessage({ event: EVENTS.FILTER_TABS });
    }

    return <TabButton onClick={() => {void onClick()}} className="z-10 w-40 h-12 ml-6 peer">
        <span className={"bg-gray-800 shadow-gray-800 opacity-80 items-center tab top-tab"}>
            <p className={"flex gap-2 button-text py-2 mt-0.5 px-8 z-10 rounded-md transition-colors group-hover:bg-white/[0.12] group-hover:outline-none group-hover:ring-4 group-hover:ring-gray-400 ring-opacity-60 "}>
                X0RT
                <RectangleStackIcon className='w-7 h-7'/>
            </p>
            <div className="bottom-fill"/>
        </span>
        <span className={"bg-gray-700 shadow-gray-700 opacity-40 mix-blend-lighten tab"}>
            <p className={"button-text"}/>
            <div className="bottom-fill"/>
        </span>
        <span className={"bg-gray-700 shadow-gray-700 opacity-40 mix-blend-lighten tab bottom-tab"}>
            <p className={"button-text"}/>
            <div className="bottom-fill"/>
        </span>
    </TabButton>
}
