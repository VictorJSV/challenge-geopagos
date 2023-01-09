import { render, screen, act, fireEvent } from "@test/test-utils";
import { Form } from "./Form";

describe("Checkout Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("When I type data in form, then it should submit correctly", async () => {
    const MockValues = {
      cardNumber: "4381 6882 4357 0515",
      cardExpiration: "12/20",
      cvc: "123",
      cardName: "Lorem Ipsum",
      dni: "56348909",
      email: "lorem@ipsum.com",
    }
    const mockSubmit = jest.fn((values) => values);
    render(<Form onSubmit={mockSubmit} total={10000} />);
    const cardNumber = screen.getByRole("textbox", {
      name: /Número de tarjeta/i,
    });
    const cardExpiration = screen.getByRole("textbox", { name: /MM\/AA/i });
    const cvc = screen.getByRole("textbox", { name: /Cód. de seguridad/i });
    const cardName = screen.getByRole("textbox", {
      name: /Nombre de titular/i,
    });
    const dni = screen.getByRole("textbox", { name: /DNI del titular/i });
    const email = screen.getByRole("textbox", { name: /Email/i });

    fireEvent.input(cardNumber, { target: { value: MockValues.cardNumber } });
    fireEvent.input(cardExpiration, { target: { value: MockValues.cardExpiration } });
    fireEvent.input(cvc, { target: { value: MockValues.cvc } });
    fireEvent.input(cardName, { target: { value: MockValues.cardName } });
    fireEvent.input(dni, { target: { value: MockValues.dni } });
    fireEvent.input(email, { target: { value: MockValues.email } });
    fireEvent.submit(screen.getByRole("button"));

    await act(() => Promise.resolve());
    expect(cardNumber).toHaveValue(MockValues.cardNumber);
    expect(cardExpiration).toHaveValue(MockValues.cardExpiration);
    expect(cvc).toHaveValue(MockValues.cvc);
    expect(cardName).toHaveValue(MockValues.cardName);
    expect(dni).toHaveValue(MockValues.dni);
    expect(email).toHaveValue(MockValues.email);
    expect(mockSubmit).toHaveReturnedWith({
      fees: 1,
      ...MockValues
    });
  });

  it("When I type card number incorrectly, then it should display error message", async () => {
    render(<Form onSubmit={jest.fn} total={10000} />);
    const cardNumber = screen.getByRole("textbox", {
      name: /Número de tarjeta/i,
    });

    fireEvent.input(cardNumber, { target: { value: "1515" } });

    expect(await screen.findByText("Campo inválido")).toBeInTheDocument();
  });

  it("When I type card expiration incorrectly, then it should display error message", async () => {
    render(<Form onSubmit={jest.fn} total={10000} />);
    const cardExpiration = screen.getByRole("textbox", { name: /MM\/AA/i });

    fireEvent.input(cardExpiration, { target: { value: "10/30" } });

    expect(await screen.findByText("Campo inválido")).toBeInTheDocument();
  });

  it("When I type cvc incorrectly, then it should display error message", async () => {
    render(<Form onSubmit={jest.fn} total={10000} />);
    const cvc = screen.getByRole("textbox", { name: /Cód. de seguridad/i });

    fireEvent.input(cvc, { target: { value: "1" } });

    expect(await screen.findByText("Campo inválido")).toBeInTheDocument();
  });

  it("When I type dni incorrectly, then it should display error message", async () => {
    render(<Form onSubmit={jest.fn} total={10000} />);
    const dni = screen.getByRole("textbox", { name: /DNI del titular/i });

    fireEvent.input(dni, { target: { value: "456" } });

    expect(await screen.findByText("Campo inválido")).toBeInTheDocument();
  });

  it("When I type email incorrectly, then it should display error message", async () => {
    render(<Form onSubmit={jest.fn} total={10000} />);
    const email = screen.getByRole("textbox", { name: /Email/i });

    fireEvent.input(email, { target: { value: "lor@pp" } });

    expect(await screen.findByText("Campo inválido")).toBeInTheDocument();
  });
});
