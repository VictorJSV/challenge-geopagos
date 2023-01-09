import { render, screen, act, fireEvent } from "@test/test-utils";
import Checkout from "./Checkout";
import * as services from "./services/checkout.service";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
}));

describe("Checkout Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("When I load view and it have an error response, then it should show an error message", async () => {
    const mockGetResume = jest
      .spyOn(services, "getResume")
      .mockRejectedValue({ error: "Async error message" });
    render(<Checkout />);

    expect(mockGetResume).toHaveBeenCalled();
    expect(await screen.findByText("Hubo un error")).toBeInTheDocument();
  });

  it("When I load cheackout view, then it should display data correctly", async () => {
    const mockGetResume = jest.spyOn(services, "getResume").mockResolvedValue({
      total: 24048.2,
      items: [
        {
          name: "Salmon Salad",
          quantity: 1,
          price: 289.2,
        },
        {
          name: "Chicken Mex Salad",
          quantity: 100,
          price: 23759.0,
        },
      ],
    });
    render(<Checkout />);

    expect(mockGetResume).toHaveBeenCalled();
    expect((await screen.findAllByText('$ 24,048.20')).length).toBe(2)
    expect(await screen.findByText('$ 289.20')).toBeInTheDocument()
    expect(await screen.findByText('$ 23,759.00')).toBeInTheDocument()
    expect(await screen.findByText('Sin interés')).toBeInTheDocument()
    expect(await screen.findByText('$ 6,412.85')).toBeInTheDocument()
    expect(await screen.findByText('$ 3,607.23')).toBeInTheDocument()
  });
});
