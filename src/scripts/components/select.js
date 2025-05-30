import { safeInit } from "../utils/safeInit.js";
import Choices from "choices.js";

safeInit(".js-choice", (select) => {
  new Choices(select, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
  });
});
