
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DetailDialog = ({ isOpen, onClose, children }: DetailDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-lg border border-white/10">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
