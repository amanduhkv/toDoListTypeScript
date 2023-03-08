import ListItem from "./ListItem";

//one getter + methods for this interface
interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void
}

//creating the class for a full list
export default class FullList implements List {
  static instance: FullList = new FullList()

  private constructor(              //create a private constructor since we only have one instance of our list
    private _list: ListItem[] = [],
  ) {}

  get list(): ListItem[] {
    return this._list
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList")                                //retrieve everything from localStorage if there
    if (typeof storedList !== 'string') return

    const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)  //created new items from that parsed list

    parsedList.forEach(itemObj => {                                                                 //go thru that parsed list, create newListItem for each item that was stringified
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
      FullList.instance.addItem(newListItem)                                                        //refers to instance of list; populate list again
    })
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list))        //saves our list so that it persists even on refresh
  }

  clearList(): void {
    this._list = []       //clears whatever is in our list arr
    this.save()           //overrides whatever is in our localStorage to clear it
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj)  //pushes new item into list arr
    this.save()
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id)  //keeps everything that doesn't have the id
    this.save()
  }

}
