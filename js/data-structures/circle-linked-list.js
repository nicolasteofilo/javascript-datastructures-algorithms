import { defaultEquals } from "../utils";
import { LinkedList } from "./linked-list";

export class CircleLinkedList {
  constructor(equalFn = defaultEquals) {
    super(equalFn);
  }
}
