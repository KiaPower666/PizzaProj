import styles from "./orderList.module.scss";
import { addClassFoundById } from "../helpers/addClassFoundById";

addClassFoundById("wrapper-main", styles.wrapper);
addClassFoundById("wrapper-main", styles.container);
addClassFoundById("viewingarea", styles.viewingarea);

class OrderList {
    constructor() {
      this.orderList = document.getElementById("order-list");
      this.orderspan = document.getElementById("orderspan");
      this.ingredients = document.getElementsByClassName("input1");
  
      for (let ingredient of this.ingredients) {
        ingredient.addEventListener("click", () => this.toggleIngredient(ingredient));
      }
    }
  
    toggleIngredient(ingredient) {
      const ingredientName = ingredient.nextElementSibling.innerHTML;
  
      if (ingredient.checked) {
        this.addIngredient(ingredientName);
      } else {
        this.removeIngredient(ingredientName);
      }
    }
  
    addIngredient(ingredientName) {
      const listItem = document.createElement("li");
      listItem.innerHTML = ingredientName;
      this.orderList.appendChild(listItem);
      this.orderspan.style.display = "none";
    }
  
    removeIngredient(ingredientName) {
      const items = this.orderList.getElementsByTagName("li");
  
      for (let item of items) {
        if (item.innerHTML === ingredientName) {
          this.orderList.removeChild(item);
          break;
        }
      }
  
      if (this.orderList.childElementCount === 0) {
        this.orderspan.style.display = "inline";
      }
    }
  }
  
  const orderList = new OrderList();
  