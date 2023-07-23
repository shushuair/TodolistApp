import React from 'react';

export type ButtonPropsType = {
    name: string
    callback: () => void
    style?: string
}



export const Button = (props: ButtonPropsType) => {
    const {name, callback} = props

    const onClickHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickHandler} className={props.style}>{name}</button>
    );
};
