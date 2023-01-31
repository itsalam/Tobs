import { Menu } from "@headlessui/react"
import React, { type HTMLProps } from "react"

export const MenuItem = (props: {label: string} & HTMLProps<HTMLElement>):JSX.Element => {
        return <Menu.Item>
        {({ active }) => (
            <div 
            className={[
                `${active ? "bg-gray-700" : "bg-transparent"}`,
                `${(props.className != null)? props.className: ""}`, 
                `relative w-full rounded-md p-2 flex items-center justify-between`
                ].join(" ")
            }>
                <span className="flex">{props.label}</span>
                {props.children}
            </div>
        )}
        </Menu.Item>
    }