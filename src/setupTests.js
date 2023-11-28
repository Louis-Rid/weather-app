import "@testing-library/jest-dom";

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockReturnValue({
    position: {
      coords: {
        latitude: 38.7424143,
        longitude: -104.6374662,
      },
    },
  }),
};

global.navigator.geolocation = mockGeolocation;
