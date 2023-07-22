import React from 'react';

export type CheckboxPropsType = {
    callback: ()=> void
    statusChecked: boolean
}

export const Checkbox = (props: CheckboxPropsType) => {
    const {callback, statusChecked} = props
    return (
        <input type="checkbox" onChange={callback} checked={statusChecked} />
    );
};
