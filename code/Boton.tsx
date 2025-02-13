import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function Boton(props) {
    const { text, tint, onTap, ...rest } = props

    return (
        <Frame
            {...rest}
            background={tint}
            onTap={onTap}
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }}
        >
            {text}
        </Frame>
    )
}

Boton.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Boton, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})
