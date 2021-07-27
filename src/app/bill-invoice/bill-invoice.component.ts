import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UserOrderService } from '../services/user-order.service';

@Component({
  selector: 'app-bill-invoice',
  templateUrl: './bill-invoice.component.html',
  styleUrls: ['./bill-invoice.component.css']
})
export class BillInvoiceComponent implements OnInit {

  orderDetails:any
  details:any;
  rechargeDetails:any;
  constructor(private _userOrderService:UserOrderService) { 
    let orderId = localStorage.getItem('orderId');
    _userOrderService.getOrderDetailsByOrderId("user-order/get-order",orderId).subscribe({
      next:data => {
        this.orderDetails = data;
        console.log(this.orderDetails.userName);
        this.details = [
          {key:'Name',value:this.orderDetails.userName},
          {key:'Invoice No',value:this.orderDetails.invoiceNumber},
          {key:'Mobile No',value:this.orderDetails.userPhoneNumber}
        ]
      
        this.rechargeDetails=[
          {key:'Order Id',value:this.orderDetails.orderId},
          {key:'Recharged Number',value:this.orderDetails.rechargedNumber},
          {key:'Plan Descrition',value:this.orderDetails.planDescription},
          {key:'Plan Amount',value:this.orderDetails.planAmount},
          {key:'Plan Duration(in days)',value:this.orderDetails.planDuration},
          {key:'Plan Activation Date',value:this.orderDetails.planActivationDate},
          {key:'Plan Expiry Date',value:this.orderDetails.planExpiryDate}
        ]
      },
      error:error => {
        console.log(error);
      }
    });

  }

  

  ngOnInit(): void {
  }

  generatePDF() {
    var data:any = document.getElementById('bill-invoice');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeigth = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('img/png');
      let pdf = new jsPDF('p','mm','a4');
      var position = 0;
      pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHeigth);
      pdf.save('bill_pdf.pdf')
    })
  }

}
