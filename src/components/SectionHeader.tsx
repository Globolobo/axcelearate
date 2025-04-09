import React from "react";
import { Box, IconButton, Text } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import "./section-header.scss";

export interface SectionHeaderProps {
  title: string;
  expanded?: boolean;
  onToggle?: () => void;
}

export const SectionHeader = ({
  title,
  expanded = false,
  onToggle,
}: SectionHeaderProps) => {
  return (
    <div className="section-header-container">
      <Box className="section-header">
        <Text size="2" weight="light" className="section-header-text">
          {title}
        </Text>
        <IconButton
          variant="ghost"
          onClick={onToggle}
          className={`section-header-toggle ${expanded ? "expanded" : ""}`}
        >
          <ChevronRightIcon color="#8E9AA5" width="20" height="20" />
        </IconButton>
      </Box>
    </div>
  );
};
