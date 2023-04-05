import data from "../../staticData/data.js";

function products(state = data, action) {
  switch (action.type) {
    case "add":
      return [...data, action.payload];
    case "delete":
      let index = data.findIndex((e) => e.id == action.payload);
      data.splice(index, 1);
      return data;
    default:
      return state;
  }
}
export default products;
