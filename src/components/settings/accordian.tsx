import React, { type HTMLProps } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuItem } from './menuItem'
import {ChevronDownIcon  } from '@heroicons/react/20/solid'

export function Accordian(props: {label: string, buttonChildren?: React.ReactNode, forceOpen?: boolean} & HTMLProps<HTMLElement>): JSX.Element  {

    const accordianButton = (open: boolean): JSX.Element => {
        return <Disclosure.Button className="relative"> 
            <MenuItem label={props.label}>
                <div className="flex gap-1 grow justify-between items-center">
                        <ChevronDownIcon 
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-white-500`}
                        />
                    {props.buttonChildren}
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