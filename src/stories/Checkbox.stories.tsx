import {Checkbox, CheckboxPropsType} from "../components/Checkbox";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Checkbox",
    component: Checkbox,
     args: {
        onChange: action("checkboxChanged"),
         checked: false
     }
} as Meta

const template:Story<CheckboxPropsType> = (args) => <Checkbox {...args} />

