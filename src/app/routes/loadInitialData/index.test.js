/*
 * © Jordan Tart https://github.com/jtart
 * https://github.com/jtart/react-universal-app
 */
import * as getRouteProps from '../getInitialData/utils/getRouteProps';
import loadInitialData from '.';
import getDials from './getDials';

jest.mock('./getDials');

describe('loadInitialData', () => {
  const data = { data: 'Some data!' };
  const match = { match: true };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('no getInitialData function on route', () => {
    it('should return an empty object', async () => {
      getRouteProps.default = jest
        .fn()
        .mockImplementation(() => ({ route: 'data', match }));

      const initialData = await loadInitialData('url', ['url']);
      expect(initialData).toEqual({});
    });
  });

  describe('getInitialData function on route', () => {
    it('should call getInitialData with passed ctx, inject dials and return value', async () => {
      const route = {
        getInitialData: jest
          .fn()
          .mockImplementation(() => Promise.resolve({ ...data })),
      };
      const dials = { dial: 'value' };
      const expectedObject = { ...data, dials };

      getDials.mockReturnValue(dials);

      getRouteProps.default = jest.fn().mockReturnValue({ route, match });

      const initialData = await loadInitialData('url', ['url']);

      expect(route.getInitialData).toHaveBeenCalledTimes(1);
      expect(route.getInitialData).toHaveBeenCalledWith({ match });
      expect(getDials).toHaveBeenCalledTimes(1);
      expect(initialData).toEqual(expectedObject);
    });

    describe('error on getInitialData call', () => {
      it('should throw an error', async () => {
        const error = 'Error!';
        const route = {
          getInitialData: jest
            .fn()
            .mockImplementation(() => Promise.reject(error)),
        };
        getRouteProps.default = jest.fn().mockReturnValue({ route, match });
        try {
          await loadInitialData(route, {});
        } catch (err) {
          expect(err).toEqual(error);
        }
        expect(route.getInitialData).toHaveBeenCalledTimes(1);
      });
    });
  });
});
