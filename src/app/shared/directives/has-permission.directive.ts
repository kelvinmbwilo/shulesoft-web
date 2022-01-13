import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';

let called = false;
let authorities: any;
let user_roles$: any;
@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective {
  private permissions: any;
  private rendered = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {
    if (!user_roles$) {
      user_roles$ = userService.getCurrentUser();
      called = true;
    } else {
      // this.updateView();
    }
    user_roles$.subscribe((user: any) => {
      user.userCredentials.userRoles.forEach((userRole: { authorities: any[]; }) => {
        if (!authorities) {
          authorities = [];
        }
        userRole.authorities.forEach((auth) => {
          if (authorities.indexOf(auth) === -1) {
            authorities.push(auth);
          }
        });
        // authorities = authorities.concat(userRole.authorities);
      });
      this.updateView();
    });
  }

  @Input()
  set appHasPermission(val: any) {
    this.permissions = val ? val : [];
    this.updateView();
  }

  private updateView() {
    if (!this.rendered && this.permissions) {
      if (this.checkPermission()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.rendered = true;
      } else {
        this.viewContainer.clear();
      }
    }
  }

  private checkPermission() {
    let hasPermission = false;
    if (authorities && this.permissions) {
      for (const checkPermission of authorities) {
        if (this.permissions.indexOf(checkPermission) > -1) {
          hasPermission = true;
        }
        /*if (checkPermission === 'ALL') {
          hasPermission = true;
          console.log('Has All Permissions found:', this.permissions, checkPermission);
        } else if (this.permissions) {
          if (this.permissions.indexOf(checkPermission) > -1) {
            console.log('All Permissions found:', this.permissions, checkPermission);
            hasPermission = true;
          }
        }*/
      }
    }
    if (this.permissions && this.permissions.length === 0) {
      hasPermission = true;
    }

    return hasPermission;
  }
}
