import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SamplePage from "sample-page/SamplePage";

describe("SamplePage", () => {
  it("renders a heading", async () => {
    render(<SamplePage />);

    const btnPlus = screen.getByText(/plus/i);
    const countDiv = screen.getByText(/COUNT/i);
    // screen.debug();
    expect(btnPlus).toBeInTheDocument();
    expect(countDiv).toBeInTheDocument();

    await userEvent.click(btnPlus);
    expect(countDiv).toHaveTextContent("COUNT : 1");
  });
});
