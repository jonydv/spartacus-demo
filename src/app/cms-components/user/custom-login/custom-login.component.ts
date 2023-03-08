import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';
import { ModalRef, ModalService } from '@spartacus/storefront';
import {
  LoginComponent,
  LoginFormComponent,
} from '@spartacus/user/account/components';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { CustomLoginFormComponent } from '../custom-login-form/custom-login-form.component';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
})
export class CustomLoginComponent extends LoginComponent implements OnInit {
  modalRef: ModalRef;
  constructor(
    auth: AuthService,
    userAccount: UserAccountFacade,
    private modalService: ModalService
  ) {
    super(auth, userAccount);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  openLoginModal() {
    let modalInstance: any;
    this.modalRef = this.modalService.open(CustomLoginFormComponent, {
      centered: true,
      size: 'lg',
      windowClass: 'login-modal',
    });
    modalInstance = this.modalRef.componentInstance;
    modalInstance.fromModal = true;
  }
}
