System.register(['angular2/core', "./contact.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewContactComponent.prototype.onSubmit = function () {
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = { name: this._routeParams.get('name'), age: '', car: '' };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n        <form #myForm=\"ngForm\" (submit)=\"onSubmit()\">\n          <div>\n            <label for=\"name\" >Name:</label>\n            <input type=\"text\" id=\"name\"\n              [(ngModel)]=\"newContact.name\"\n              ngControl=\"name\"\n              required \n             />\n          </div>\n          <div>\n            <label for=\"age\" >Age:</label>\n            <input type=\"text\" id=\"age\" \n              [(ngModel)]=\"newContact.age\"\n              ngControl=\"age\"\n              required\n            />\n          </div>\n          <div>\n            <label for=\"car\" >Car:</label>\n            <input type=\"text\" id=\"car\" \n            [(ngModel)]=\"newContact.car\"\n            ngControl=\"car\"\n            required\n            />\n          </div>\n          <button [disabled]=\"!myForm.form.valid\"  type=\"submit\">Create Contact</button>\n         </form>\n    ",
                        styles: ["\n      label {\n        width: 100px;\n        display: inline-block;\n      }\n      input {\n        width: 250px;\n      }\n  "],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQTtnQkFJRSw2QkFBb0IsZUFBK0IsRUFBVSxPQUFnQixFQUFVLFlBQXlCO29CQUE1RixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUVuSCxzQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkF2REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUscTVCQTRCUDt3QkFDSCxNQUFNLEVBQUMsQ0FBQyxvSUFRUCxDQUFDO3dCQUNGLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzVCLENBQUM7O3VDQUFBO2dCQWdCRiwwQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQscURBY0MsQ0FBQSIsImZpbGUiOiJuZXctY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxmb3JtICNteUZvcm09XCJuZ0Zvcm1cIiAoc3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiA+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0Lm5hbWVcIlxuICAgICAgICAgICAgICBuZ0NvbnRyb2w9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiID5BZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5hZ2VcIlxuICAgICAgICAgICAgICBuZ0NvbnRyb2w9XCJhZ2VcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhclwiID5DYXI6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2FyXCIgXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld0NvbnRhY3QuY2FyXCJcbiAgICAgICAgICAgIG5nQ29udHJvbD1cImNhclwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhbXlGb3JtLmZvcm0udmFsaWRcIiAgdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBDb250YWN0PC9idXR0b24+XG4gICAgICAgICA8L2Zvcm0+XG4gICAgYCxcbiAgc3R5bGVzOltgXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIG5ld0NvbnRhY3Q6IENvbnRhY3Q7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXIgOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyl7fVxuXG4gIG9uU3VibWl0KCl7XG4gICAgdGhpcy5fY29udGFjdFNlcnZpY2UuaW5zZXJ0Q29udGFjdCh0aGlzLm5ld0NvbnRhY3QpO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbnRhY3RzJ10pO1xuICB9XG5cbiAgbmdPbkluaXQoKTphbnkge1xuICAgIHRoaXMubmV3Q29udGFjdCA9IHtuYW1lOiB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKSwgYWdlOiAnJywgY2FyOiAnJ307XG4gIH1cbn1cbiJdfQ==
