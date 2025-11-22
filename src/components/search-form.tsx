import { RiSearch2Line } from "@remixicon/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export function SearchForm() {
  return (
    <form method="get" className="max-w-xs">
      <InputGroup>
        <Label className="hidden">Search</Label>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <RiSearch2Line />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
