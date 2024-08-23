import { Button } from '~/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import HamburgerIcon from '~/assets/icons/timeline/hamburger.svg';
import MarkAsReadIcon from '~/assets/icons/timeline/mark-as-read.svg';
import TrashIcon from '~/assets/icons/timeline/trash.svg';

type ComponentProps = {
  showRead?: boolean;
  onRead?: () => void;
  showDelete?: boolean;
  onDelete?: () => void;
};

export default function CardPopover(props: Readonly<ComponentProps>) {
  const { showRead, onRead, showDelete, onDelete } = props;

  return (
    <Popover>
      <PopoverTrigger>
        <img src={HamburgerIcon} className="size-5" alt="" />
      </PopoverTrigger>

      <PopoverContent className="w-fit px-4 py-3" align="end">
        <ul className="flex flex-col gap-4">
          {showRead && (
            <li className="leading-none">
              <Button
                onClick={onRead}
                variant="link"
                className="p-0 text-xs font-normal md:text-sm"
              >
                <img src={MarkAsReadIcon} className="size-4 md:size-5" alt="" />
                Mark as read
              </Button>
            </li>
          )}
          {showDelete && (
            <li className="leading-none">
              <Button
                variant="link"
                className="p-0 text-xs font-normal text-[#FF3B30] md:text-sm"
                onClick={onDelete}
              >
                <img src={TrashIcon} className="size-4 md:size-5" alt="" />
                Delete
              </Button>
            </li>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
