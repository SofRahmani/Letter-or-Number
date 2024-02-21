import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

export interface ToolTipsProps {
  children: React.ReactNode;
  content: string;
  placement?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end"
    | "right-start"
    | "right-end";
}

export default function ToolTips({ children, content, placement }: ToolTipsProps) {
  return (
    <Tooltip content={content} placement={placement}>
      {children}
    </Tooltip>
  );
}
