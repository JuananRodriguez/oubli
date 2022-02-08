import React from "react";
import { addons } from "@storybook/addons";
import customTheme from "./theme";

addons.setConfig({
  //Show story component as full screen
  isFullscreen: false,
  //Display panel that shows a list of stories
  showNav: true,
  //Display panel that shows addon configurations
  showPanel: true,
  //Where to show the addon panel [bottom | right]
  panelPosition: "right",
  //Enable/disable shortcuts
  enableShortcuts: true,
  //Show/hide tool bar
  isToolshown: true,
  //Storybook Theme, see next section
  theme: undefined,
  //Id to select an addon panel
  selectedPanel: undefined,
  //Select the default active tab on Mobile [sidebar | canvas | addons]
  initialActive: "sidebar",
  //Sidebar options, see below
  sidebar: {
    //Display the top-level nodes as a "root" in the sidebar
    showRoots: true,
    //Set of root node IDs to visually collapse by default
    collapsedRoots: ["other"],
    //Create a custom label for tree nodes; must return a ReactNode
    renderLabel: (item) => <abbr title={item.name}>{item.name}</abbr>,
  },
  //Modify the tools in the toolbar using the addon id
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});

addons.setConfig({
  theme: customTheme,
});
