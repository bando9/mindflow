import { RiSearch2Line } from "@remixicon/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "@radix-ui/react-label";
import { useSearchParams } from "react-router";

export function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query: string = searchParams.get("q") || "";

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value;
    setSearchParams((currentSearchParams) => {
      if (newQuery) {
        currentSearchParams.set("q", newQuery);
      } else {
        currentSearchParams.delete("q");
      }
      return currentSearchParams;
    });
  }

  return (
    <form className="max-w-lg w-full" method="get">
      <InputGroup>
        <Label className="hidden" htmlFor="q">
          Search
        </Label>
        <InputGroupInput
          placeholder="Search..."
          id="q"
          name="q"
          value={query ?? ""}
          onChange={handleSearchChange}
        />
        <InputGroupAddon>
          <RiSearch2Line className="w-5 h-5" />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
