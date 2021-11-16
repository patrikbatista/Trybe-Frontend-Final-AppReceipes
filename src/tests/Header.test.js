import React from "react";
import Foods from "../Components/pages/Main/Foods";
import renderWithRouterAndRedux from "./helper";

describe("2 - Header", () => {
  it("Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo", () => {
    const { getByTestId } = renderWithRouterAndRedux(<Foods />);
    expect(getByTestId("profile-top-btn")).toBeInTheDocument();
    expect(getByTestId("page-title")).toBeInTheDocument();
    expect(getByTestId("search-top-btn")).toBeInTheDocument();
  });

});
