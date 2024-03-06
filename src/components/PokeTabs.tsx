"use client";
import { Card, Tab, Tabs } from "@nextui-org/react";
import PokeTab from "./PokeTab";

export default function PokeTabs({ pokemon }: { pokemon: any }) {
  let tabs = [
    {
      id: "details",
      label: "Details",
      content: <PokeTab pokemon={pokemon} />,
    },
  ];

  return (
    <Card className="p-10 w-full">
      <Tabs
        className="scrollbar-hide overflow-x-scroll w-full"
        classNames={{
          panel: "w-full flex items-center justify-center",
          tabList: "w-full",
          tabContent: "p-5 font-semibold uppercase",
        }}
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </Card>
  );
}
