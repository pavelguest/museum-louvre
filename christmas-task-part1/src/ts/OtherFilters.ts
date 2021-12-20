import { app, Idata } from "./CreateElement";
import Filters from "./Filters";
import { saveLocal } from "./SaveLocalStorage";

class OtherFilters extends Filters {
  constructor() {
    super()
  }
  hasKeysColor(button: HTMLElement | null) {
    if(button) {
      if(this.isKeys(this.keysColor, button.dataset.filter!)) {
        this.deleteKey(this.keysColor, button.dataset.filter!)
      } else {
        this.addKey(this.keysColor, button.dataset.filter!);
      }
      saveLocal.keysColor = [ ...this.keysColor ];
      saveLocal.save();
    }
  }
  hasKeysSize(button: HTMLElement | null) {
    if(button) {
      if(this.isKeys(this.keysSize, button.dataset.filter!)) {
        this.deleteKey(this.keysSize, button.dataset.filter!)
      } else {
        this.addKey(this.keysSize, button.dataset.filter!);
      }
      saveLocal.keysSize = [ ...this.keysSize ];
      saveLocal.save();
    }
  }
  hasKeysShape(button: HTMLElement | null) {
    if(button) {
      if(this.isKeys(this.keysShape, button.dataset.filter!)) {
        this.deleteKey(this.keysShape, button.dataset.filter!)
      } else {
        this.addKey(this.keysShape, button.dataset.filter!);
      }
      saveLocal.keysShape = [ ...this.keysShape ];
      saveLocal.save();
    }
  }
  hasKeysYear(values: string[]) {
    this.keysYear = [ ...values ];
  }
  hasKeysCount(values: string[]) {
    this.keysCount = [ ...values ];
  }
  filterColor(elem: { color: string; }) {
    return (this.keysColor.length > 0) ? this.keysColor.includes(elem!.color) : true;
  }
  filterSize(elem: { size: string; }) {
    return (this.keysSize.length > 0) ? this.keysSize.includes(elem!.size) : true;
  }
  filterShape(elem: { shape: string; }) {
    return (this.keysShape.length > 0) ? this.keysShape.includes(elem!.shape) : true;
  }
  filterFavorite(elem: { favorite: boolean }) {
    if(this.input) {
      return((this.input as HTMLInputElement).checked) ? elem.favorite === true : true;
    }
  }
}

export let otherFilters = new OtherFilters()

export default OtherFilters;
