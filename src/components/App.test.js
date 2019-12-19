import React from "react";
import renderer from "react-test-renderer";
import { MovieTitle } from "./common/appCommon";

import axios from "axios";
import { fetchData } from "./common/fetchTestData";

jest.mock("axios");

describe("Start Test", () => {
  it("Init Test Case", () => {
    expect(true).toEqual(true);
  });
});


describe("MovieTitle", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<MovieTitle varTitle={"test"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = { status: "success", response: "A New Hope" };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData("home/getTitleOpenCrawl")).resolves.toEqual(data);
    
  });
  
});




