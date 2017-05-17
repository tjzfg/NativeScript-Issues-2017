"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
function navigatingTo(args) {
    var page = args.object;
    var tf = page.getViewById("tf");
    var sw = page.getViewById("sw");
    // the event name is concatanating the property name "text" with key word "Change" = "textChange"
    tf.on("textChange", function (args) {
        console.log("text changed for text-field!");
        console.log(args.eventName); // textChange
        console.log(args.propertyName); // text
        console.log(args.object); // TextField<tf
        console.log(args.value);
        console.log(args.oldValue);
    });
    // the event name is concatanating the property name "checked" with key word "Change" = "checkedChange"
    sw.on("checkedChange", function (args) {
        console.log("switch checked change!");
        console.log(args.eventName); // checkedChange
        console.log(args.propertyName); // checked
        console.log(args.object); // Switch<sw>
        console.log(args.value);
        console.log(args.oldValue);
    });
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBS3BELHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsSUFBSSxFQUFFLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3hDLGlHQUFpRztJQUNqRyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLElBQXdCO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUU1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQTtJQUVGLHVHQUF1RztJQUN2RyxFQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLElBQXdCO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBL0JELG9DQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSAsIFByb3BlcnR5Q2hhbmdlRGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIGxldCB0ZiA9IDxUZXh0RmllbGQ+cGFnZS5nZXRWaWV3QnlJZChcInRmXCIpO1xuICAgIGxldCBzdyA9IDxTd2l0Y2g+cGFnZS5nZXRWaWV3QnlJZChcInN3XCIpO1xuXG5cbiAgICAvLyB0aGUgZXZlbnQgbmFtZSBpcyBjb25jYXRhbmF0aW5nIHRoZSBwcm9wZXJ0eSBuYW1lIFwidGV4dFwiIHdpdGgga2V5IHdvcmQgXCJDaGFuZ2VcIiA9IFwidGV4dENoYW5nZVwiXG4gICAgdGYub24oXCJ0ZXh0Q2hhbmdlXCIsIChhcmdzOiBQcm9wZXJ0eUNoYW5nZURhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXh0IGNoYW5nZWQgZm9yIHRleHQtZmllbGQhXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuZXZlbnROYW1lKTsgLy8gdGV4dENoYW5nZVxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLnByb3BlcnR5TmFtZSk7IC8vIHRleHRcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5vYmplY3QpOyAvLyBUZXh0RmllbGQ8dGZcbiAgICAgICAgY29uc29sZS5sb2coYXJncy52YWx1ZSk7IFxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm9sZFZhbHVlKTsgXG4gICAgfSlcblxuICAgIC8vIHRoZSBldmVudCBuYW1lIGlzIGNvbmNhdGFuYXRpbmcgdGhlIHByb3BlcnR5IG5hbWUgXCJjaGVja2VkXCIgd2l0aCBrZXkgd29yZCBcIkNoYW5nZVwiID0gXCJjaGVja2VkQ2hhbmdlXCJcbiAgICBzdy5vbihcImNoZWNrZWRDaGFuZ2VcIiwgKGFyZ3M6IFByb3BlcnR5Q2hhbmdlRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN3aXRjaCBjaGVja2VkIGNoYW5nZSFcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coYXJncy5ldmVudE5hbWUpOyAvLyBjaGVja2VkQ2hhbmdlXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MucHJvcGVydHlOYW1lKTsgLy8gY2hlY2tlZFxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7IC8vIFN3aXRjaDxzdz5cbiAgICAgICAgY29uc29sZS5sb2coYXJncy52YWx1ZSk7IFxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm9sZFZhbHVlKTsgXG4gICAgfSlcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG59Il19