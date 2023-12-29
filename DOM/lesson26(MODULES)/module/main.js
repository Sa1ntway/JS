import { drawline } from "./simple.js";
import { create } from "./creat.js";
import { createRect } from "./flat.js";

let myCanvas = create("myCanvas", document.body, 480, 320);

drawline(myCanvas.ctx, 50, 50, 100, 100, "red");
createRect(rect(50, 50, 50, 50));
