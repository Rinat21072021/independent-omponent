import React, {ChangeEvent, useState} from "react";


type propsType = {
    title: string
    callback:(title:string)=>void
}
export const EditableSpan = (props: propsType) => {
    let [title, setTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const editOn = () => {
        setEdit(true)
    }
    const editOff = () => {
        setEdit(false)
        props.callback(title)

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        edit
            ? <input onBlur={editOff} autoFocus value={title} onChange={onChangeHandler} />
            : <span onDoubleClick={editOn} >{props.title}</span>

    )
}