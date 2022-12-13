const mock = require('jest-mock-req-res');
const { ObjectId } = require('mongodb');
const { getAllListItems, getListItem, createListItem, updateListItem, deleteListItem } = require('../controllers/listitem');
jest.setTimeout(90 * 1000);

describe("getListItem()", () => {
  describe("should return matching list item from db", () => {
    const req0 = mock.mockRequest({
      params: {
        id: '639827babb802ed8b8d14b03'
      }
    });
    const res0 = mock.mockResponse();
    const mockListItem = {
      _id: ObjectId('639827babb802ed8b8d14b03'),
      title: "See the Northern Lights"
    };
    
    test("responds with the list item document", async () => {
      await getListItem(req0, res0);
      expect(res0.send).toHaveBeenCalledWith(expect.objectContaining(mockListItem));
    });
  });
  
  describe("should return error message from db", () => {
    const req1 = mock.mockRequest({
      params: {
        id: '000000aaaa000aa0a0a00a00'
      }
    });
    const res1 = mock.mockResponse();
    
    test("responds with error message", async () => {
      await getListItem(req1, res1);
      expect(res1.send).toHaveBeenCalledWith("No Item exists with this name.");
    });
  });
});

describe("createListItem()", () => {
  describe("create a new list item", () => {
    const req2 = mock.mockRequest({
      body: {
        title: "Go snorkeling",
        cost: 100,
        location: "The Bahamas",
        supplies: "Goggles, flippers, and snorkels",
        notes: "Notes about snorkeling"
      }
    });
    const res2 = mock.mockResponse();
    const mockListItem = {
      title: "Go snorkeling",
      cost: 100,
      location: "The Bahamas",
      supplies: "Goggles, flippers, and snorkels",
      notes: "Notes about snorkeling"
    };
    
    test("responds with the list item document", async () => {
      await createListItem(req2, res2);
      expect(res2.send).toHaveBeenCalledWith(expect.objectContaining(mockListItem));
    });
  });
});

describe("updateListItem()", () => {
  describe("update an existing list item", () => {
    const req3 = mock.mockRequest({
      params: {
        id: '6398a0004f330b15386ac02f'
      },
      body: {
        title: "Eat at Mirazur"
      }
    });
    const res3 = mock.mockResponse();
    const mockListItem = {
      title: "Eat at Mirazur"
    };

    test("responds with the list item document", async () => {
      await updateListItem(req3, res3);
      expect(res3.send).toHaveBeenCalledWith(expect.objectContaining(mockListItem));
    });
  });
});

describe("deleteListItem()", () => {
  describe("delete an existing list item", () => {
    const req4 = mock.mockRequest({
      params: {
        id: '6398a1befbcc073d345fe86d'
      }
    });
    const res4 = mock.mockResponse();
    mockMessage = {
      message: "Delete was successful."
    }

    test("responds with the list item document", async () => {
      await deleteListItem(req4, res4);
      expect(res4.send).toHaveBeenCalledWith(expect.objectContaining(mockMessage));
    });
  });
});