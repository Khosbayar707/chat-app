import { Card } from "@/components/ui/card";
import React from "react";

const ConverstaionFallback = () => {
  return (
    <Card className="hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary-foreground">
      Select/start a converstaion to get started
    </Card>
  );
};
export default ConverstaionFallback;
