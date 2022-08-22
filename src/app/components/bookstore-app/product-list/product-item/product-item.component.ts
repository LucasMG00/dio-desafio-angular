import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Book } from '../../../../models/Book';
import { faCartPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/components/shared/popup/details-popup/details-popup.component';
import { MessengerService } from 'src/app/services/messenger.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  faCartPlus = faCartPlus
  faInfoCircle = faInfoCircle

  @Input()
  livro!: Book;

  constructor(private dialogRef: MatDialog, private msg: MessengerService, public toastService: ToastService) { }

  openDialog() {
    this.dialogRef.open(DetailsComponent, {
      data: {
        title: this.livro.name,
        details: this.livro.details
      }
    })
  }

  showSuccess(addTpl: string | TemplateRef<any>) {
    this.toastService.show(addTpl, { classname: 'bg-success text-light', delay: 5000 });
  }

  showDanger(dangerTpl: string | TemplateRef<any>) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 5000 });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  handleAddToList() {
    this.msg.sendMsg(this.livro)
  }

}