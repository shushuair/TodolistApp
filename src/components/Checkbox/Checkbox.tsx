import React, {ChangeEvent} from 'react';

export type CheckboxPropsType = {
    callback: (isDone: boolean)=> void
    statusChecked: boolean
}

export const Checkbox = (props: CheckboxPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.checked)
    }
    const {callback, statusChecked} = props
    return (
        <input type="checkbox" onChange={onChangeHandler} checked={statusChecked} />
    );
};
