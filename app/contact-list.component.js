System.register(["angular2/core", './contact.component', "./contact.service"], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n        <ul>\n            <li *ngFor=\"#contact of contacts\" \n            (click)=\"onSelect(contact)\"\n            [class.isclicked]=\"selectedContact === contact\">{{contact.name}}</li>\n        </ul>\n        <contact *ngIf=\"selectedContact !== null\" [contact]=\"selectedContact\" ></contact>  \n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ['../src/css/contact-list.css']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBTUksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBRjVDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUk5QixDQUFDO2dCQUVELDBDQUFXLEdBQVg7b0JBQUEsaUJBRUM7b0JBREMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztnQkFDN0YsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSLFVBQVMsT0FBTztvQkFDWixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQTtnQkFDbEMsQ0FBQztnQkFwQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHdUQU9UO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztxQkFDN0MsQ0FBQzs7d0NBQUE7Z0JBeUJGLDJCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCx1REFzQkMsQ0FBQSIsImZpbGUiOiJjb250YWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdC5jb21wb25lbnQnXG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNjb250YWN0IG9mIGNvbnRhY3RzXCIgXG4gICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIlxuICAgICAgICAgICAgW2NsYXNzLmlzY2xpY2tlZF09XCJzZWxlY3RlZENvbnRhY3QgPT09IGNvbnRhY3RcIj57e2NvbnRhY3QubmFtZX19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGNvbnRhY3QgKm5nSWY9XCJzZWxlY3RlZENvbnRhY3QgIT09IG51bGxcIiBbY29udGFjdF09XCJzZWxlY3RlZENvbnRhY3RcIiA+PC9jb250YWN0PiAgXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ29udGFjdENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvY3NzL2NvbnRhY3QtbGlzdC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBjb250YWN0czogQ29udGFjdFtdO1xuXG4gICAgcHVibGljIHNlbGVjdGVkQ29udGFjdCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2Upe1xuXG4gICAgfVxuXG4gICAgZ2V0Q29udGFjdHMoKXtcbiAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueXtcbiAgICAgIHRoaXMuZ2V0Q29udGFjdHMoKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdChjb250YWN0KXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0XG4gICAgfVxuXG59XG4iXX0=
