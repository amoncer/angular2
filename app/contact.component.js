System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.createFrom = function () {
                    this._router.navigate(['NewContact', { name: this.contact.name }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <div>\n          <div>\n            <label for=\"name\" >Name:</label>\n            <input type=\"text\" [(ngModel)]=\"contact.name\" id=\"name\" />\n          </div>\n          <div>\n            <label for=\"age\" >Age:</label>\n            <input type=\"text\" [(ngModel)]=\"contact.age\" id=\"age\" />\n          </div>\n          <div>\n            <label for=\"car\" >Car:</label>\n            <input type=\"text\" [(ngModel)]=\"contact.car\" id=\"car\" />\n          </div>\n         </div>\n         <button (click)=\"createFrom()\" >Create New From This</button>\n    ",
                        inputs: ['contact'],
                        styles: ["\n      label {\n        width: 100px;\n        display: inline-block;\n      }\n      input {\n        width: 250px;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUdJLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRjVCLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBRU0sQ0FBQztnQkFFdEMscUNBQVUsR0FBVjtvQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDZrQkFnQlQ7d0JBQ0QsTUFBTSxFQUFDLENBQUMsU0FBUyxDQUFDO3dCQUNsQixNQUFNLEVBQUMsQ0FBQyxzSUFRUCxDQUFDO3FCQUNMLENBQUM7O29DQUFBO2dCQVdGLHVCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwrQ0FTQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCIgPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29udGFjdC5uYW1lXCIgaWQ9XCJuYW1lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiID5BZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29udGFjdC5hZ2VcIiBpZD1cImFnZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJcIiA+Q2FyOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbnRhY3QuY2FyXCIgaWQ9XCJjYXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjcmVhdGVGcm9tKClcIiA+Q3JlYXRlIE5ldyBGcm9tIFRoaXM8L2J1dHRvbj5cbiAgICBgLFxuICAgIGlucHV0czpbJ2NvbnRhY3QnXSxcbiAgICBzdHlsZXM6W2BcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBjb250YWN0OiBDb250YWN0ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXt9XG5cbiAgICBjcmVhdGVGcm9tKCl7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydOZXdDb250YWN0Jywge25hbWU6IHRoaXMuY29udGFjdC5uYW1lfV0pO1xuICAgIH1cblxufVxuIl19
