export default [
  {
    url: "/GetDrives",
    response: () => {
      return {
        status: 200,
        data: ["C", "D", "E", "F"],
      };
    },
  },{
    url: "/DeskDir",
    response: () => {
      return {
        status: 200,
        data: "d:/Desktop",
      };
    },
  },
];
