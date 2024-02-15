import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";
import edit from "./edit";
import "./index.scss";
import save from "./save";

registerBlockType(block.name, {
  edit,
  save
});
