const mock = require('jest-mock-req-res');
const { ObjectId } = require('mongodb');
const { getProfile, createProfile, updateProfile, deleteProfile } = require('../controllers/profile');
jest.setTimeout(90 * 1000);

// describe("getProfile()", () => {
//   describe("using valid email", () => {
//     const req0 = mock.mockRequest({
//       params: {
//         id: "i need a valid code but I can't make a profile"
//       }
//     });
//     const res0 = mock.mockResponse();
//     const mockProfile = {
//       email: "courtneylamx@gmail.com"
//     };
    
//     test("responds with the profile document", async () => {
//       await getProfile(req0, res0);
//       expect(res0.send).toHaveBeenCalledWith(expect.objectContaining(mockProfile));
//     });
//   });
  
//   describe("should return error message from db", () => {
//     const req1 = mock.mockRequest({
//       params: {
//         id: '000000aaaa000aa0a0a00a00'
//       }
//     });
//     const res1 = mock.mockResponse();
    
//     test("responds with error message", async () => {
//       await getProfile(req1, res1);
//       expect(res1.send).toHaveBeenCalledWith("No profile exists for this user.");
//     });
//   });
// });
  
// describe("createProfile()", () => {
//   describe("create a new profile", () => {
//     const req2 = mock.mockRequest({
//       body: {
//         title: "Go snorkeling",
//         cost: 100,
//         location: "The Bahamas",
//         supplies: "Goggles, flippers, and snorkels",
//         notes: "Notes about snorkeling"
//       }
//     });
//     const res2 = mock.mockResponse();
//     const mockProfile = {
//       title: "Go snorkeling",
//       cost: 100,
//       location: "The Bahamas",
//       supplies: "Goggles, flippers, and snorkels",
//       notes: "Notes about snorkeling"
//     };
    
//     test("responds with the profile document", async () => {
//       await createProfile(req2, res2);
//       expect(res2.send).toHaveBeenCalledWith(expect.objectContaining(mockProfile));
//     });
//   });
// });

// describe("updateProfile()", () => {
//   describe("update an existing profile", () => {
//     const req3 = mock.mockRequest({
//       params: {
//         id: '6398a0004f330b15386ac02f'
//       },
//       body: {
//         title: "Eat at Mirazur"
//       }
//     });
//     const res3 = mock.mockResponse();
//     const mockProfile = {
//       title: "Eat at Mirazur"
//     };

//     test("responds with the profile document", async () => {
//       await updateProfile(req3, res3);
//       expect(res3.send).toHaveBeenCalledWith(expect.objectContaining(mockProfile));
//     });
//   });
// });

// describe("deleteProfile()", () => {
//   describe("delete an existing profile", () => {
//     const req4 = mock.mockRequest({
//       params: {
//         id: '6398a1befbcc073d345fe86d'
//       }
//     });
//     const res4 = mock.mockResponse();
//     mockMessage = {
//       message: "Delete was successful."
//     }

//     test("responds with the profile document", async () => {
//       await deleteProfile(req4, res4);
//       expect(res4.send).toHaveBeenCalledWith(expect.objectContaining(mockMessage));
//     });
//   });
// });