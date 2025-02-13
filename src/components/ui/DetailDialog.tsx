import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DetailDialog = ({ isOpen, onClose, children }: DetailDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[70vw] max-w-[90vw] w-full bg-background/95 backdrop-blur-lg border border-white/10 sm:text-base text-sm">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
