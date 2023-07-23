import {Checkbox, CheckboxPropsType} from "../components/Checkbox/Checkbox";
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions"

export default {
    title: "Todo/Checkbox",
    component: Checkbox,
     args: {
         callback: action("checkboxChanged"),
         statusChecked: false
     }
} as Meta

const template:Story<CheckboxPropsType> = (args) => <Checkbox {...args} />

export const checkboxChecked = template.bind({})
checkboxChecked.args = {statusChecked: true}


export const checkboxUnchecked = template.bind({})
checkboxUnchecked.args = {statusChecked: false}
