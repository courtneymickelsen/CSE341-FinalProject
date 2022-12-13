const mock = require('jest-mock-req-res');
const { ObjectId } = require('mongodb');
const { getIdeas, getIdea, createIdea, updateIdea, deleteIdea } = require('../controllers/idea');
// jest.useFakeTimers();
jest.setTimeout(90 * 1000);

// NOT WORKING getIdeas()
// describe("getIdeas()", () => {
//     const req = mock.mockRequest();
//     const res = mock.mockResponse();
    
//     test('get ideas from the database', async () => {
//         await getIdeas(req, res);
//         expect(res.send).toHaveBeenCalledWith(201);
//     });
// });

describe("getIdea()", () => {
  describe("When an idea matching the given ID is present", () => {
    const req1 = mock.mockRequest({
        params: {
            id: "6397f3e739b5d0ef49f7a7ba"
        }
    });
    const res1 = mock.mockResponse();
    const mockIdea = {
        _id: ObjectId('6397f3e739b5d0ef49f7a7ba'),
        title: "Travel to Thailand",
    };

    test("responds with the idea document", async () => {
      await getIdea(req1, res1);
      expect(res1.send).toHaveBeenCalledWith(expect.objectContaining(mockIdea));
    });
  });

  describe("When an idea matching the given ID is not present", () => {
    const req1 = mock.mockRequest({
        params: {
            id: "000000a000a0a00000d000aa"
        }
    });
    const res1 = mock.mockResponse();
    const date = new Date('2022-12-13T03:39:19.856Z').toISOString();

    test("responds saying it could not be found", async () => {
      await getIdea(req1, res1);
      expect(res1.send).toHaveBeenCalledWith("No Idea Found.");
    });
  });
});


describe("createIdea()", () => {
  describe("create a new idea", () => {
    const req2 = mock.mockRequest({
      body: {
        title: "Learn French"
      }
    });
    const res2 = mock.mockResponse();
    const mockIdea = {
      title: "Learn French",
    };

    test("responds with the idea document", async () => {
      await createIdea(req2, res2);
      expect(res2.send).toHaveBeenCalledWith(expect.objectContaining(mockIdea));
    });
  });
});

describe("updateIdea()", () => {
  describe("update an existing idea", () => {
    const req3 = mock.mockRequest({
      params: {
        id: '6398a41d03d9e707b9bc5398'
      },
      body: {
        title: "Play the Piano"
      }
    });
    const res3 = mock.mockResponse();
    const mockIdea = {
      title: "Play the Piano",
    };

    test("responds with the idea document", async () => {
      await updateIdea(req3, res3);
      expect(res3.send).toHaveBeenCalledWith(expect.objectContaining(mockIdea));
    });
  });
});

describe("deleteIdea()", () => {
  describe("delete an existing idea", () => {
    const req4 = mock.mockRequest({
      params: {
        id: '6398a57618c4c0ff76879ab2'
      }
    });
    const res4 = mock.mockResponse();
    const mockMessage = {
      message: "Delete was successful."
    }

    test("responds with the idea document", async () => {
      await deleteIdea(req4, res4);
      expect(res4.send).toHaveBeenCalledWith(expect.objectContaining(mockMessage));
    });
  });
});