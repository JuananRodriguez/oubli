import React from "react";
import { Button } from "./index";

export default { title: "Design System/Atoms/Button" };

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { background: "#ff0", label: "Button" };
Primary.storyName = "I am the primary";

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };

export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
