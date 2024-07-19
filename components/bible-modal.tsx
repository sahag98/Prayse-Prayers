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

export function AlertDialogDemo({ verse }: { verse: string | undefined }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <TbBible
          className="self-end ml-1 cursor-pointer text-primary/50 hover:text-primary hover:scale-110 transition-all"
          size={30}
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
