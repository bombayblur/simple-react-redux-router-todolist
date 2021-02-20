import React from 'react'
import Button from '../components/Button'

export default {
    title:'Poop',
    component: Button,
    argTypes:{
        color:{control:'color'}
    }
}

export const Template = (args) => <Button onclick = {()=>console.log('cool clicked')} {...args} />

export const Cool = Template.bind({});
Cool.args = {
    color:'blue',
    text:'Boring Button'
}

