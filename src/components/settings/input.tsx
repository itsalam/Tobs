import React, { type HTMLProps } from "react"

const Input = (props: HTMLProps<HTMLElement>): JSX.Element => {
    const classes = {
        colorClasses: "bg-gray-50 border border-gray-300 text-gray-900",
        darkClasses: "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
        focusClasses: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500",
        layoutClasses: "rounded-lg block w-full p-1 float-right"
    }

    return <input type="text" id="first_name" className={[...Object.values(classes), props.className].join(" ")}/>
}

export default Input;