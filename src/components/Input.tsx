import React from 'react';

export type ButtonPropsType = {
    title: string
    callback: (title: string) => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.callback}>{props.title}</button>
    );
};
