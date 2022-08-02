import { render, act } from "@testing-library/react";
import useCount from "common/hooks/useCount";

describe("render hooks", () => {
  it("Should render useCount hook", () => {
    let result;
    function HookCountMock() {
      result = useCount();
      return <></>;
    }

    render(<HookCountMock />);
    expect(result.count).toBe(0);

    act(() => {
      result.inc();
    });
    expect(result.count).toBe(1);
  });
});
