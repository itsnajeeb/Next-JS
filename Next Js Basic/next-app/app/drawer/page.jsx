"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/drawer"

import {Button} from '../components/ui/button'
const DrawerExample  = () => {

    return (
        <>
            <Drawer asChild >
                <DrawerTrigger className="text-white bg-blue-800 px-4 py-2 ml-5 rounded-md cursor-pointer">Open</DrawerTrigger>
                <DrawerContent >
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button variant="outline">Submit</Button>
                        <DrawerClose>
                            <Button >Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerExample 