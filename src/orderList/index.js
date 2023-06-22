import styles from "./orderList.module.scss";
import { addClassFoundById } from "../helpers/addClassFoundById";

addClassFoundById("wrapper-main", styles.wrapper);
addClassFoundById("wrapper-main", styles.container);
addClassFoundById("viewingarea", styles.viewingarea);

function toggleIngredient(checkboxId, ingredientName) {
    const checkbox = document.getElementById(checkboxId);
    const orderList = document.getElementById("order-list");
    const orderspan = document.getElementById("orderspan");

    if(checkbox.checked){
        const listItem = document.createElement("li");
        listItem.innerHTML = ingredientName;
        orderList.appendChild(listItem);
        orderspan.style.display = "none";
    } else{
        const item = orderList.getElementsByTagName("li");
        for(let i = 0; i < item.length; i++) {
            if(items[i].innerHTML === ingredientName) {
                orderList.removeChild(items[i]);
                break;
            }
        }

        if (orderList.childElementCount === 0){
            orderspan.style.display = "inline";
        }
    }
}

document.getElementById("dough_11").addEventListener("click", function() {
    toggleIngredient("dough_11", "Классика");
  });
  document.getElementById("dough_12").addEventListener("click", function() {
    toggleIngredient("dough_12", "Тонкое");
  });
  document.getElementById("dough_13").addEventListener("click", function() {
    toggleIngredient("dough_13", "Сырный борт");
  });
  document.getElementById("dough_14").addEventListener("click", function() {
    toggleIngredient("dough_14", "Хот-Дог борт");
  });
  
  document.getElementById("meat_21").addEventListener("click", function() {
    toggleIngredient("meat_21", "Бекон");
  });
  document.getElementById("meat_22").addEventListener("click", function() {
    toggleIngredient("meat_22", "Ветчина");
  });
  document.getElementById("meat_23").addEventListener("click", function() {
    toggleIngredient("meat_23", "Пепперони");
  });
  document.getElementById("meat_24").addEventListener("click", function() {
    toggleIngredient("meat_24", "Баварские колбаски");
  });
  
  document.getElementById("vegetables_31").addEventListener("click", function() {
    toggleIngredient("vegetables_31", "Сладкий перец");
  });
  document.getElementById("vegetables_32").addEventListener("click", function() {
    toggleIngredient("vegetables_32", "Шампиньоны");
  });
  document.getElementById("vegetables_33").addEventListener("click", function() {
    toggleIngredient("vegetables_33", "Халапеньо");
  });
  document.getElementById("vegetables_34").addEventListener("click", function() {
    toggleIngredient("vegetables_34", "Томаты");
  });
  
  document.getElementById("sauce_41").addEventListener("click", function() {
    toggleIngredient("sauce_41", "Барбекю");
  });
  document.getElementById("sauce_42").addEventListener("click", function() {
    toggleIngredient("sauce_42", "Бургер");
  });
  document.getElementById("sauce_43").addEventListener("click", function() {
    toggleIngredient("sauce_43", "Ранч");
  });
  document.getElementById("sauce_44").addEventListener("click", function() {
    toggleIngredient("sauce_44", "Карри");
  });