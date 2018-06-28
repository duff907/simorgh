import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import SubHeading from './index';
import { textBlock } from '../../../__test__/blockHelpers';


storiesOf('SubHeading', module).add('default', () => <SubHeading {...textBlock('This is a SubHeading')} />);
