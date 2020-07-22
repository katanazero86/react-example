import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from '@storybook/react/demo';

import ButtonBasic from '../atoms/ButtonBasic';

addDecorator(withKnobs);

// writing addons
// export default {
//     title: 'Button',
// };

// export const withText = () => <Button>Hello Button</Button>;

// export const withEmoji = () => (
//     <Button>
//         <span role="img" aria-label="so cool">
//             😀 😎 👍 💯
//     </span>
//     </Button>
// );


// export const buttonBasic = () => <ButtonBasic text="add2" color="primary" size="small" />;

storiesOf('UI|Welcome', module)
    .add('Hello storybook', () =>
        <div>
            <h2>Hello storybook</h2>
            <p>This is a UI component storybook(react)</p>
        </div>);

storiesOf('Components|Buttons', module)
.add('ButtonBasic', () =>
    <ButtonBasic text="add2" color="primary" size="small" />
);
