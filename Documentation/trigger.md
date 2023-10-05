# Your React Icon Library - Changing Colors and Triggering Actions

Your React Icon Library allows you to customize icon colors and trigger actions to create engaging user experiences. In this guide, we'll explore how to change colors and trigger actions using the library's components.

## Table of Contents

1. [Changing Icon Colors](#changing-icon-colors)
2. [Triggering Actions](#triggering-actions)

## Changing Icon Colors

You can easily change the colors of icons to match your application's theme or branding. To do this, use the `colors` prop:

```jsx
import React from "react";
import { ParkIcon } from "your-react-icon-library";

function ColorfulIcon() {
  return (
    <div>
      <h2>Change Icon Colors</h2>
      <ParkIcon size={48} colors={{ primary: "red", secondary: "yellow" }} />
    </div>
  );
}

export default ColorfulIcon;
```

Triggering Actions

You can trigger actions such as animations on user interaction using the trigger prop. Here are some available trigger options:

    'hover': Trigger on mouse hover (default).
    'click': Trigger on mouse click.
    'loop': Continuous loop animation.
    'loop-on-hover': Loop animation on hover.
    'morph': Morphing animation.
    'morph-two-way': Two-way morphing animation.

import React from 'react';
import { ParkIcon } from 'your-react-icon-library';

```jsx
function ActionIcon() {
  return (
    <div>
      <h2>Trigger Actions</h2>
      <ParkIcon
        size={48}
        colors={{ primary: 'blue', secondary: 'green' }}
        trigger="click" <!-- Change trigger action here -->
      />
    </div>
  );
}

export default ActionIcon;
```
