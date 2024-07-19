import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TbBible } from "react-icons/tb";
import { BiBible } from "react-icons/bi";

export function AlertDialogDemo({ verse }: { verse: string | undefined }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="dark:bg-[#212121] bg-gray-500 w-12 h-12 p-2 rounded-full"
        asChild
      >
        <BiBible
          className="self-end ml-1 cursor-pointer text-white dark:text-primary/50  hover:dark:text-primary hover:scale-110 transition-all"
          size={25}
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-4/5 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Bible Verse</AlertDialogTitle>
          <AlertDialogDescription>{verse}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
