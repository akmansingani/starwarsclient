import React from "react";
import renderer from "react-test-renderer";
import { MovieTitle, MostCharacter,MostSpecies,MostPlanet } from "./common/appCommon";

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

  it("fetches successfully data from an API", async () => {
    const data = { status: "success", response: "A New Hope" };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData("home/getTitleOpenCrawl")).resolves.toEqual(data);
  });

});

describe("MostAppearedCharacter", () => {
  
  test("snapshot renders", () => {
    const component = renderer.create(<MostCharacter varCharacter={"test"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  
  it("fetches successfully data from an API", async () => {
      const data = { status: "success", response: "A New Hope" };
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(fetchData("home/getCharacterMostAppeared")).resolves.toEqual(
        data
      );
  });


});

describe("MostNumberOfSpecies", () => {

  var resp = [
    {
      speciesname: "Human",
      speciescount: 4
    }
  ];

  test("snapshot renders", () => {
    const component = renderer.create(<MostSpecies varSpecies={resp} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("fetches successfully data from an API", async () => {
    const data = { status: "success", response: resp };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData("home/getMostNumberOfSpecies")).resolves.toEqual(
      data
    );
  });
});

describe("MostNumberOfPilots", () => {
  var resp = [
    {
      planet_id: 1,
      planetname: "Tatooine",
      people_count: 19,
      people_list: [
        { people_name: "Chewbacca - Wookie" },
        { people_name: "Nien Nunb - Sullustan" }
      ]
    }
  ];

  test("snapshot renders", () => {
    const component = renderer.create(<MostPlanet varPlanets={resp} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("fetches successfully data from an API", async () => {
    const data = { status: "success", response: resp };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData("home/getPlanetNumberOfPilots")).resolves.toEqual(
      data
    );
  });
});


