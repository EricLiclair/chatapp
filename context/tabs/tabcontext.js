import { createContext } from "react";
import { DEFAULT_TAB, DEFAULT_TABS } from "./defaultvalues";

const TabContext = createContext({
    tab: DEFAULT_TAB,
    tabs: DEFAULT_TABS,
    setTab: () => { }
});

export default TabContext;
