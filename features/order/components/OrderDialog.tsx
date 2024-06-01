import { Copy } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "components/ui/dialog"
import { useSelectedItemStore } from "stores/selected-item-store"

export function OrderDialog() {
  const { id, setSelectedItem } = useSelectedItemStore((state) => state)

  const handleCloseDialog = () => {
    setSelectedItem({
      id: "",
      name: "",
      price: 0,
    })
  }

  return (
    <Dialog open={!!id}>
      <DialogContent onInteractOutside={handleCloseDialog} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <input id="link" defaultValue="https://ui.shadcn.com/docs/installation" />
          </div>
          <button type="submit" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="size-4" />
          </button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button onClick={handleCloseDialog} type="button">
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
