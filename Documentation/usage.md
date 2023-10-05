# Your React Icon Library - Usage Guide

Your React Icon Library makes it easy to integrate icons into your React applications. In this guide, we'll cover how to use the library's components effectively.

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [Customization](#customization)
4. [Advanced Usage](#advanced-usage)
5. [Examples](#examples)

## Installation

Before you can use the library, make sure it's installed in your project. You can follow the [installation instructions](link-to-installation) in the main documentation.

## Basic Usage

To use an icon component from the library, follow these simple steps:

1. Import the component at the top of your React file:

   ```jsx
   import React from "react";
   import { ParkIcon } from "your-react-icon-library";
   ```

2. Use the Imported Component in your code:

   ```jsx
   function MyComponent() {
     return (
       <div>
         <h1>My React App</h1>
         <ParkIcon size={32} colors={{ primary: "blue", secondary: "green" }} />
       </div>
     );
   }
   ```
