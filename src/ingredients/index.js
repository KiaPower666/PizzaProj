import styles from "./ingredients.module.scss";
import { addClassFoundById } from "../helpers/addClassFoundById";
import { addClassFoundByClass} from '../helpers/addClassFoundByClass';
/* import { addBackground } from '../helpers/addbackground'; */

addClassFoundById("ingredients", styles.ingredients);
addClassFoundById("ingredients", styles.container);
addClassFoundByClass("input-div", styles.inputdiv);
addClassFoundByClass("input1", styles.input);
addClassFoundByClass("checkbox-label", styles.checkboxlabel);


