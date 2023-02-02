import React, { type HTMLProps } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { MenuItem } from "./menuItem"
import {ChevronDownIcon  } from "@heroicons/react/20/solid"


export function Accordian(props: {label: string, buttonChildren: JSX.Element, forceOpen?: boolean} & HTMLProps<HTMLElement>): JSX.Element  {

    const buttonChildContainerRef = React.useRef<HTMLDivElement>(null)

    const onClick = (e: React.MouseEvent<Element, MouseEvent>): void => {
        console.log(buttonChildContainerRef?.current)
        console.log(e.currentTarget)
        if ((buttonChildContainerRef?.current?.contains(e.currentTarget)) ?? false){
            e.stopPropagation();
        }
    }

    const accordianButton = (open: boolean): JSX.Element => {
        return <Disclosure.Button className="relative"> 
            <MenuItem label={props.label} onClick={(e) => {onClick(e)}}>
                <div className="flex grow items-center justify-between gap-1">
                        <ChevronDownIcon 
                        className={`${
                            open ? "rotate-180" : ""
                        } h-5 w-5 text-white`}
                        />
                        <div ref={buttonChildContainerRef}>
                            {props.buttonChildren}
                        </div>
                </div>
            </MenuItem>
        </Disclosure.Button>
    }

    return (
        <Disclosure>
        {({ open }) => { 
            open = (props.forceOpen ?? false) || open
            return <>
                {accordianButton(open)}
                <Transition
                    enter="transition duration-150 ease-out"
                    enterFrom="transform -translate-y-[20%] scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="relative z-[-10]">
                    {props.children}
                    </Disclosure.Panel>
                </Transition>
            </>
        }}
        </Disclosure>
    )
}