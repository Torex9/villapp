import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx';

export interface Tab {
  id: string;
  label: string,
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <TabGroup className="flex flex-col">
      <TabList className="flex gap-px w-full overflow-x-auto">
        {props.tabs.map((tab) => (
          <Tab
            key={tab.id}
            className={clsx("outline-none px-6 py-3 font-semibold text-nowrap shrink-0 duration-150", 
              "data-[focus]:outline-1 data-[focus]:outline-white", 
              "data-[hover]:bg-gray-100", 
              "data-[selected]:bg-white"
            )}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.tabs.map((tab) => (
          <TabPanel key={tab.id} className="bg-white px-6 py-9">
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default Tabs;