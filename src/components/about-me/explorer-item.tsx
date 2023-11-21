/* eslint-disable prettier/prettier */
import { infosType } from "@/db/folders";
import * as Accordion from "@radix-ui/react-accordion";
import * as Collapsible from "@radix-ui/react-collapsible";

interface ExplorerItemProps {
  item: infosType;
}
export default function ExplorerItem({ item }: ExplorerItemProps) {
  return (
    <Accordion.Item value={item.innerText} key={item.id}>
      <Accordion.Trigger asChild>
        <span className="[&>i]:data-[state=open]:rotate-90 px-3 py-4 gap-1 flex border-b border-lines text-gray-300 hover:text-white cursor-pointer">
          <i className="ri-arrow-right-s-fill" />
          <h3>{item.innerText}</h3>
        </span>
      </Accordion.Trigger>

      <Accordion.Content asChild>
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1 ">
          {item.content.map((child) =>
            child.type === "folder" ? (
              <Collapsible.Root
                key={child.innerText}
                className="gap-1 flex flex-col items-start"
              >
                <Collapsible.Trigger asChild>
                  <span className="first:[&>i]:data-[state=open]:rotate-90 flex items-baseline gap-1 hover:text-gray-300 cursor-pointer">
                    <i className="ri-arrow-right-s-line" />
                    <i className="ri-folder-3-fill" />
                    <p>{child.innerText}</p>
                  </span>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  {child.content.map((item) => (
                    <span
                      className="gap-1 flex items-baseline ml-5 hover:text-gray-300 cursor-pointer"
                      key={item.innerText}
                    >
                      <i className="ri-markdown-fill" />
                      {item.innerText}
                    </span>
                  ))}
                </Collapsible.Content>
              </Collapsible.Root>
            ) : (
              <a
                className="gap-1 flex items-baseline hover:text-gray-300 cursor-pointer"
                key={child.innerText}
                href={`${child.type === "mail" ? "mailto:" + child.innerText : "#"
                  }`}
              >
                <i className={`ri-${child.type}-fill`} />
                {child.innerText}
              </a>
            )
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
