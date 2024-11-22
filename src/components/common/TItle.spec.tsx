import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    const titleElement = screen.getByText("제목"); // DOM 접근 대신 쿼리 사용
    expect(titleElement).toHaveStyle({ fontSize: "2rem" });
  });

  it("color props 적용", () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProvider>
    );

    const titleElement = screen.getByText("제목"); // DOM 접근 대신 쿼리 사용
    expect(titleElement).toHaveStyle({ color: "brown" });
  });
});
