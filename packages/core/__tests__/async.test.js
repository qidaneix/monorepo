import { time, promise } from "../lib/async";

// test("time", (done) => {
//   function cb(data) {
//     try {
//       expect(data).toBe("hello world");
//       done();
//     } catch (e) {
//       done(e);
//     }
//   }
//   time(cb);
// });

test("promise", () => {
  promise(1).then((data) => expect(data).toBe(false));
  promise(-1).catch((data) => expect(data).toBe(true));
});

test("promise2", () => {
  promise(100).then((data) => expect(data).toBe(false));
});

test("promise3", () => {
  promise(-1).then(
    () => undefined,
    (data) => expect(data).toBe(true)
  );
});

test("async", async () => {
  const res = await promise(1);
  expect(res).toBe(false);
});

test("async2", async () => {
  try {
    await promise(-1);
  } catch (error) {
    expect(error).toBe(true);
  }
});
