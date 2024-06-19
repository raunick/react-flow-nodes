"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer"; 
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Flow from "./flow";
import { GearIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // Manage drawer state

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex flex-col h-screen">
      <Button onClick={handleOpen} className="fixed top-4 left-4 z-50">
        <GearIcon className="mr-4"/>
      Opções</Button> {/* Fixed button */}
      
      <div className="flex-grow overflow-y-auto">
        <Flow />
      </div>

      {isOpen && (
        <Drawer open={isOpen} onClose={handleClose} direction="left">
          <DrawerContent position="left">
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={handleClose}>Submit</Button>
              <Button variant="outline" onClick={handleClose}>Cancel</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
