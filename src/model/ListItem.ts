// model for list item

/*
Item Class - 'interface'

Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".
*/
export interface Item {
  id: string,
  item: string,
  checked: boolean,
}

/*
Getters & Setters:

To avoid repeating the check, you can use setters and getters. The getters and setters allow you to control the access to the properties of a class.

For each property:

A getter method returns the value of the property’s value. A getter is also called an accessor.
A setter method updates the property’s value. A setter is also known as a mutator.
A getter method starts with the keyword get and a setter method starts with the keyword set.
*/
export default class ListItem implements Item {
  constructor(
    private _id: string = '',
    private _item: string = '',
    private _checked: boolean = false,
  ) {}

  get id(): string {
    return this._id
  }

  set id(id: string) {
    this._id = id
  }

  get item(): string {
    return this._item
  }

  set item(item: string) {
    this._item = item
  }

  get checked(): boolean {
    return this._checked
  }

  set checked(checked: boolean) {
    this._checked = checked
  }
}
