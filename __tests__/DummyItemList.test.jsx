import { render, screen } from "@testing-library/react";
import DummyItemList from "common/components/DummyItemList/DummyItemList";

describe("DummyItemList", () => {
  it("renders a heading", () => {
    render(<DummyItemList code={"saya"} name={"wdhaw"} />);

    const heading = screen.getByText("saya - wdhaw");
    // screen.debug();

    expect(heading).toBeInTheDocument();
  });
});
