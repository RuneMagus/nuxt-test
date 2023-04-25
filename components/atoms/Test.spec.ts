import { render, screen } from "@testing-library/vue";
import Test from "~/components/atoms/Test.vue";

describe("Test component", () => {
  const setup = () => {
    return render(Test as any);
  };
  test("renders component with Hello world", async () => {
    setup();
    expect(screen.getByText("Hello world")).toBeVisible();
  });
});
