import React from "react";
import { Menu } from "@headlessui/react"
import { IconClickListBox } from "./listbox";
import { SettingsSwitch } from "./switch";
import { Accordian } from "./accordian";
import { MenuItem } from "./menuItem";
import Input from "./input";

export function Settings(): JSX.Element {

    return <div className="animated overflow-y-overlay relative -top-2 z-10 mt-4 h-72 w-[98%] bg-transparent pl-4 peer-hover:-translate-x-1.5 peer-hover:-translate-y-1.5 peer-focus:translate-x-0 peer-focus:translate-y-0">
        <Menu as="div" className="relative flex w-full flex-col rounded-md pr-2 focus:outline-none">
            <MenuItem label="On Taskbar Icon Click" description="gagabobob lololol">
                <IconClickListBox className="w-36" options={[{name: "Sort tabs"}, {name: "Open Settings"}]} />
            </MenuItem>
            <Accordian buttonChildren={<IconClickListBox className="w-36" options={[{name: "Keep"}, {name: "Exclude"}, {name: "Delete All"}]} />} label="On Duplicates">
                <div className="flex items-center justify-center gap-2 p-2">
                    Exclude Duplicates In <IconClickListBox className="w-36" options={[{name: "New window"}, {name: "Same window"}]} />
                </div>
            </Accordian>
            <MenuItem label="Include all windows" className="py-3">
                <SettingsSwitch options={[]}/>
            </MenuItem>
            <Accordian buttonChildren={<SettingsSwitch className="py-1" options={[]}/>} label="Group by times">
                <div className="flex items-center justify-center gap-2 p-2">
                    Every <Input className="w-8"/> <IconClickListBox className="w-28" options={[{name: "Hours"}, {name: "Days"}]} />
                </div>
            </Accordian>
        </Menu>
    </div>
}

