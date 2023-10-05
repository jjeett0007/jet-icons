# Your React Icon Library - Changing Icon Colors

Your React Icon Library provides a flexible way to customize the colors of icons to match your application's design. In this section, we'll explore how to change icon colors using the library's components.

## Table of Contents

1. [Basic Color Customization](#basic-color-customization)
2. [Advanced Color Customization](#advanced-color-customization)

## Basic Color Customization

Changing the colors of icons is straightforward. You can use the `colors` prop to specify the primary and secondary colors:

```jsx
import React from "react";
import { YourIcon } from "your-react-icon-library";

function ColorfulIcon() {
  return (
    <div>
      <h2>Basic Color Customization</h2>
      <YourIcon size={48} colors={{ primary: "blue", secondary: "green" }} />
    </div>
  );
}

export default ColorfulIcon;
```
