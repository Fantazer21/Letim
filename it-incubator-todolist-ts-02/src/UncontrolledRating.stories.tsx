import React from 'react'
import {action} from '@storybook/addon-actions';
import UncRating from "./UncontrolledRating";


export default {
    title: 'Rating stories',
    component: UncRating,
}


export const EmptyRating = () => <UncRating/>