/* eslint-disable react/prop-types */
import { Menu } from "@headlessui/react"
import React from "react"

export const MenuItem = (props: {label: string, className?: string, description?: string} & React.DOMAttributes<Element>):JSX.Element => {
        return <Menu.Item>
        {({ active }) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div onClick={(e) => {
                if (props.onClick != null){
                    props.onClick(e)
                }}
            }
            className={[
                `${active ? "bg-white/[0.04]" : "bg-transparent"}`,
                `${(props.className != null)? props.className: ""}`, 
                "relative w-full rounded-md p-2 flex items-center justify-between"
                ].join(" ")
            }>
                <div className="flex flex-col">
                    {props.label}
                    {(props.description != null) && 
                        <span className="py-2 pl-2 text-sm text-gray-400/50">
                            {props.description}
                        </span>
                    }

                </div>
                {props.children}
            </div>
        )}
        </Menu.Item>
    }