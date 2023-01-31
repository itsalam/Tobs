
import * as React from 'react';
  
export default function TabButton(props: {onClick: unknown, className: string} & React.HTMLAttributes<HTMLButtonElement>): JSX.Element {

    const [extraClasses, ] = React.useState("");

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        event.currentTarget.blur();
        if(props.onClick != null) props.onClick(event)
    }

    return <button {...props} ref={buttonRef} onClick={(e) => {void onClick(e)}} className={["button group", props.className, extraClasses].join(" ")}>
            {props.children}
    </button>
}
  