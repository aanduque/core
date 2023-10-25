/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CheckboxReorderPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/reorderCheckboxes.ts
function reorderCheckboxesInList(inputText) {
  var _a;
  const checkboxPattern = /^- \[(x| )\] .+(\n[ \t]+-.*)*$/gm;
  const allCheckboxes = (_a = inputText.match(checkboxPattern)) != null ? _a : [];
  const uncheckedCheckboxes = allCheckboxes.filter((cb) => cb.startsWith("- [ ]"));
  const checkedCheckboxes = allCheckboxes.filter((cb) => cb.startsWith("- [x]"));
  const reorderedCheckboxes = [
    ...uncheckedCheckboxes,
    ...checkedCheckboxes
  ];
  const reorderedText = inputText.replace(
    checkboxPattern,
    () => reorderedCheckboxes.shift() || ""
  );
  return reorderedText;
}
function reorderCheckboxesInFile(inputText) {
  const checkboxListPattern = /^- .+(\n[ \t]*- .*)*$/gm;
  const reorderedText = inputText.replace(
    checkboxListPattern,
    reorderCheckboxesInList
  );
  return reorderedText;
}

// src/main.ts
var CheckboxReorderPlugin = class extends import_obsidian.Plugin {
  async onload() {
    console.log("Checkbox Reorder Plugin loaded");
    this.addCommand({
      id: "reorder-checkboxes",
      name: "Reorder Checkboxes in List",
      editorCallback: (editor, view) => {
        this.reorderCheckboxes(editor);
      }
    });
  }
  reorderCheckboxes(editor) {
    const currentText = editor.getValue();
    const reorderedText = reorderCheckboxesInFile(currentText);
    editor.setValue(reorderedText);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL3Jlb3JkZXJDaGVja2JveGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBQbHVnaW4sIE1hcmtkb3duVmlldywgRWRpdG9yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyByZW9yZGVyQ2hlY2tib3hlc0luRmlsZSB9IGZyb20gXCJzcmMvcmVvcmRlckNoZWNrYm94ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hSZW9yZGVyUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggUmVvcmRlciBQbHVnaW4gbG9hZGVkXCIpO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiBcInJlb3JkZXItY2hlY2tib3hlc1wiLFxuXHRcdFx0bmFtZTogXCJSZW9yZGVyIENoZWNrYm94ZXMgaW4gTGlzdFwiLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVvcmRlckNoZWNrYm94ZXMoZWRpdG9yKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRyZW9yZGVyQ2hlY2tib3hlcyhlZGl0b3I6IEVkaXRvcikge1xuXHRcdGNvbnN0IGN1cnJlbnRUZXh0ID0gZWRpdG9yLmdldFZhbHVlKCk7XG5cdFx0Y29uc3QgcmVvcmRlcmVkVGV4dCA9IHJlb3JkZXJDaGVja2JveGVzSW5GaWxlKGN1cnJlbnRUZXh0KTtcblx0XHRlZGl0b3Iuc2V0VmFsdWUocmVvcmRlcmVkVGV4dCk7XG5cdH1cbn1cbiIsICJcbmZ1bmN0aW9uIHJlb3JkZXJDaGVja2JveGVzSW5MaXN0KGlucHV0VGV4dDogc3RyaW5nKSB7XG4gIGNvbnN0IGNoZWNrYm94UGF0dGVybiA9IC9eLSBcXFsoeHwgKVxcXSAuKyhcXG5bIFxcdF0rLS4qKSokL2dtO1xuXG4gIGNvbnN0IGFsbENoZWNrYm94ZXMgPSBpbnB1dFRleHQubWF0Y2goY2hlY2tib3hQYXR0ZXJuKSA/PyBbXTtcblxuICBjb25zdCB1bmNoZWNrZWRDaGVja2JveGVzID1cbiAgICBhbGxDaGVja2JveGVzXG4gICAgICAuZmlsdGVyKChjYikgPT4gY2Iuc3RhcnRzV2l0aChcIi0gWyBdXCIpKTtcbiAgY29uc3QgY2hlY2tlZENoZWNrYm94ZXMgPVxuICAgIGFsbENoZWNrYm94ZXNcbiAgICAgIC5maWx0ZXIoKGNiKSA9PiBjYi5zdGFydHNXaXRoKFwiLSBbeF1cIikpO1xuXG4gIGNvbnN0IHJlb3JkZXJlZENoZWNrYm94ZXMgPSBbXG4gICAgLi4udW5jaGVja2VkQ2hlY2tib3hlcyxcbiAgICAuLi5jaGVja2VkQ2hlY2tib3hlcyxcbiAgXTtcbiAgY29uc3QgcmVvcmRlcmVkVGV4dCA9IGlucHV0VGV4dC5yZXBsYWNlKFxuICAgIGNoZWNrYm94UGF0dGVybixcbiAgICAoKSA9PiByZW9yZGVyZWRDaGVja2JveGVzLnNoaWZ0KCkgfHwgXCJcIixcbiAgKTtcblxuICByZXR1cm4gcmVvcmRlcmVkVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJDaGVja2JveGVzSW5GaWxlKGlucHV0VGV4dDogc3RyaW5nKSB7XG4gIGNvbnN0IGNoZWNrYm94TGlzdFBhdHRlcm4gPSAvXi0gLisoXFxuWyBcXHRdKi0gLiopKiQvZ207XG4gIGNvbnN0IHJlb3JkZXJlZFRleHQgPSBpbnB1dFRleHQucmVwbGFjZShcbiAgICBjaGVja2JveExpc3RQYXR0ZXJuLFxuICAgIHJlb3JkZXJDaGVja2JveGVzSW5MaXN0XG4gICk7XG4gIHJldHVybiByZW9yZGVyZWRUZXh0O1xufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBNkM7OztBQ0M3QyxTQUFTLHdCQUF3QixXQUFtQjtBQURwRDtBQUVFLFFBQU0sa0JBQWtCO0FBRXhCLFFBQU0saUJBQWdCLGVBQVUsTUFBTSxlQUFlLE1BQS9CLFlBQW9DLENBQUM7QUFFM0QsUUFBTSxzQkFDSixjQUNHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxPQUFPLENBQUM7QUFDMUMsUUFBTSxvQkFDSixjQUNHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxPQUFPLENBQUM7QUFFMUMsUUFBTSxzQkFBc0I7QUFBQSxJQUMxQixHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsRUFDTDtBQUNBLFFBQU0sZ0JBQWdCLFVBQVU7QUFBQSxJQUM5QjtBQUFBLElBQ0EsTUFBTSxvQkFBb0IsTUFBTSxLQUFLO0FBQUEsRUFDdkM7QUFFQSxTQUFPO0FBQ1Q7QUFFTyxTQUFTLHdCQUF3QixXQUFtQjtBQUN6RCxRQUFNLHNCQUFzQjtBQUM1QixRQUFNLGdCQUFnQixVQUFVO0FBQUEsSUFDOUI7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDs7O0FEN0JBLElBQXFCLHdCQUFyQixjQUFtRCx1QkFBTztBQUFBLEVBQ3pELE1BQU0sU0FBUztBQUNkLFlBQVEsSUFBSSxnQ0FBZ0M7QUFFNUMsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxRQUFnQixTQUF1QjtBQUN2RCxhQUFLLGtCQUFrQixNQUFNO0FBQUEsTUFDOUI7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFFQSxrQkFBa0IsUUFBZ0I7QUFDakMsVUFBTSxjQUFjLE9BQU8sU0FBUztBQUNwQyxVQUFNLGdCQUFnQix3QkFBd0IsV0FBVztBQUN6RCxXQUFPLFNBQVMsYUFBYTtBQUFBLEVBQzlCO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
