export default [
  {
    url: "/IsFolder",
    timeout: 1000,
    method: "post",
    response: ({ body }) => {
      let path = body.p0;
      let start = path.lastIndexOf("/");
      let isF = true;
      if (
        start != -1 &&
        path.substring(start, path.length - 1).indexOf(".") != -1
      ) {
        isF = false;
      }
      return {
        status: 200,
        data: isF,
      };
    },
  },
];
