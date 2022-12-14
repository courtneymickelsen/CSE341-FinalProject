const mock = require('jest-mock-req-res');
const { ObjectId } = require('mongodb');
const { getAllReminders, getReminder, createReminder, updateReminder, deleteReminder } = require('../controllers/reminder');
jest.setTimeout(90 * 1000);

describe("getReminder()", () => {
  describe("should return matching reminder from db", () => {
    const req0 = mock.mockRequest({
      params: {
        id: '6398ef98db2b70d47ad0291b'
      }
    });
    const res0 = mock.mockResponse();
    const mockReminder = {
      _id: ObjectId('6398ef98db2b70d47ad0291b'),
      title: "Open a Bakery"
    };
    
    test("responds with the reminder document", async () => {
      await getReminder(req0, res0);
      expect(res0.send).toHaveBeenCalledWith(expect.objectContaining(mockReminder));
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
      await getReminder(req1, res1);
      expect(res1.send).toHaveBeenCalledWith("No matching reminder found.");
    });
  });
});

describe("createReminder()", () => {
  describe("create a new reminder", () => {
    const req2 = mock.mockRequest({
      body: {
        title: "Go to Paris",
        date: "October 20",
        time: "12:00",
        items: []
    }
    });
    const res2 = mock.mockResponse();
    const mockReminder = {
      title: "Go to Paris",
        date: "October 20",
        time: "12:00",
        items: []
    };
    
    test("responds with the reminder document", async () => {
      await createReminder(req2, res2);
      expect(res2.send).toHaveBeenCalledWith(expect.objectContaining(mockReminder));
    });
  });
});


describe("updateReminder()", () => {
  describe("update an existing reminder", () => {
    const req3 = mock.mockRequest({
      params: {
        id: '6398ef98db2b70d47ad0291b'
      },
      body: {
        title: "Open a Bakery"
      }
    });
    const res3 = mock.mockResponse();
    const mockReminder = {
      title: "Open a Bakery"
    };

    test("responds with the reminder document", async () => {
      await updateReminder(req3, res3);
      expect(res3.send).toHaveBeenCalledWith(expect.objectContaining(mockReminder));
    });
  });
});

describe("deleteReminder()", () => {
  describe("delete an existing reminder", () => {
    const req4 = mock.mockRequest({
      params: {
        id: '63991907757dbca072729d7d'
      }
    });
    const res4 = mock.mockResponse();
    mockMessage = {
      message: "Delete was successful."
    }

    test("responds with the reminder document", async () => {
      await deleteReminder(req4, res4);
      expect(res4.send).toHaveBeenCalledWith(expect.objectContaining(mockMessage));
    });
  });
});