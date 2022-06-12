import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel, MyLabelProps } from "../components/MyLabel";




export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'},
        fontColor: { control: 'color'},
    }
} as ComponentMeta<typeof MyLabel>


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: "basic",
    size: 'h1',
    allCaps: true
}

export const Secondary = Template.bind({ })

Secondary.args = {
    label: "secondary",
    size: 'h1',
    allCaps: false,
    color: 'secondary'
}

export const Tertiary = Template.bind({ })

Tertiary.args = {
    label: "tertiary",
    size: 'h1',
    allCaps: true,
    color: 'tertiary'
}

export const Custom = Template.bind({ })

Custom.args = {
    label: "custom",
    size: 'h1',
    allCaps: true,
}