import { RiSearch2Line } from "@remixicon/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "@radix-ui/react-label";

export function SearchForm() {
  return (
    <form className="max-w-lg w-full" method="get">
      <InputGroup>
        <Label className="hidden" htmlFor="q">
          Search
        </Label>
        <InputGroupInput placeholder="Search..." id="q" name="q" />
        <InputGroupAddon>
          <RiSearch2Line className="w-5 h-5" />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
