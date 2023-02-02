/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { type HTMLProps, Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"

export function IconClickListBox(props: { options: Array<{name: string}>} & HTMLProps<HTMLDivElement>): JSX.Element{
    
    const [selected, setSelected] = React.useState(props.options[0])

    const onClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      e.stopPropagation();
    }

    return <Listbox value={selected} onChange={setSelected}>
    <div {...props} className={["relative", props.className].join(" ")} onClick={(e) => {onClick(e)}}>
      <Listbox.Button className="relative z-20 w-full cursor-default rounded-lg bg-gray-800/30 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-400">
        <span className="block truncate">{selected.name}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#3D3B51] py-1 shadow-lg ring-2 ring-[#333041] focus:outline-none ">
          {props.options.map((option, optionIdx) => (
            <Listbox.Option
              key={optionIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 px-4 ${
                  active ? "bg-pink-500/60" : ""
                }`
              }
              value={option}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {option.name}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
}
