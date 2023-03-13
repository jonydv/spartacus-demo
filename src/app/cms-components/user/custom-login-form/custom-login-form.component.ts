import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '@spartacus/storefront';
import {
  LoginFormComponent,
  LoginFormComponentService,
} from '@spartacus/user/account/components';

@Component({
  selector: 'app-custom-login-form',
  templateUrl: './custom-login-form.component.html',
  styleUrls: ['./custom-login-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomLoginFormComponent
  extends LoginFormComponent
  implements OnInit
{
  fromModal: boolean = false;
  constructor(
    protected service: LoginFormComponentService,
    protected modalService: ModalService
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.style = this.fromModal ? false : true;
  }

  closeModal(reason: string) {
    this.modalService.closeActiveModal(reason);
  }
}
