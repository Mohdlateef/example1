// import { Button } from "/components/ui/button"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import { Button } from "../components/ui/button"


export const Dialoge = () => {
    function handleCall() {
        console.log("hello");
    }
    return (
        <>
            <h1>hey from dialog</h1>
            <DialogRoot>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                        Open Dialog
                    </Button>
                </DialogTrigger>
                <DialogContent style={{
                    background: "white",
                    padding: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                }}>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <DialogActionTrigger>

                            <Button onClick={() => { handleCall(); }}>Save</Button>
                        </DialogActionTrigger>

                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </DialogRoot>
        </>

    )
}
