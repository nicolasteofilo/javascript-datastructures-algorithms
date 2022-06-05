import { defaultEquals } from "../utils";
import { Node } from "./models/node";
export default class LinkedList {
  constructor(equalFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalFn = equalFn;
  }
}
