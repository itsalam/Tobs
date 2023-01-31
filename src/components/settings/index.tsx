import React from "react";
import { Menu } from '@headlessui/react'
import { IconClickListBox } from "./listbox";
import { SettingsSwitch } from "./switch";
import { Accordian } from "./accordian";
import { MenuItem } from "./menuItem";
import Input from "./input";

export function Settings(): JSX.Element {

    return <div className="relative -top-2 w-[98%] h-64 z-10 mt-4 pl-4 bg-transparent animated peer-hover:-translate-x-1.5 peer-hover:-translate-y-1.5 peer-focus:translate-x-0 peer-focus:translate-y-0 overflow-y-overlay">
        <Menu as="div" className="flex flex-col relative w-full pr-2 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem label="On Taskbar Icon Click">
                <IconClickListBox className="w-36" options={[{name: "Sort tabs"}, {name: "Open Settings"}]} />
            </MenuItem>
            <Accordian buttonChildren={<IconClickListBox className="w-48" options={[{name: "Keep in group"}, {name: "Exclude in group"}, {name: "Delete All"}]} />} label="On Duplicates">
                <div className="flex justify-center items-center gap-2 p-2">
                    Group Duplicates In <IconClickListBox className="w-36" options={[{name: "New window"}, {name: "Same window"}]} />
                </div>
            </Accordian>
            <MenuItem label="Include all windows" className="py-3">
                <SettingsSwitch options={[]}/>
            </MenuItem>
            <Accordian buttonChildren={<SettingsSwitch className="py-1" options={[]}/>} label="Group by times">
                <div className="flex justify-center items-center gap-2 p-2">
                    Every <Input className="w-8"/> <IconClickListBox className="w-24" options={[{name: "Hours"}, {name: "Days"}]} />
                </div>
            </Accordian>
        </Menu>
    </div>
}

