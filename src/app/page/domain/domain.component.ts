import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { InputText } from 'src/app/model/input-text';
import { Tld } from 'src/app/model/tld';
import { DomainService } from 'src/app/service/domain.service';
import { InputTextService } from 'src/app/service/input-text.service';
import { TldService } from 'src/app/service/tld.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  domainList$: Observable<any> = this.domainService.getAll();
  domain1$: Observable<any> = this.domainService.get(1);
  //domain1$: Observable<any>;
  isDomain: string = '';
  chooseDomain: boolean = true;
  inputText: string = '';
  inputDomain: string = '';
  inputTLD: string = '';
  input: InputText = new InputText();
  showCard: boolean = false;
  isNotTld: boolean = false;
  clickNumber: number = 0;

  domainArray: string[] = [];
  basket: number = 0;
  domRegInBasket: string = '';
  domainArrayItem = {
    id: 0,
    domain: '',
    message: '',
    color: '',
    transfer_price: 0,
    list_price: 0,
    currency: "Ft",
    in_cart: false,
  };

  tldList: Tld[] = [];
  firstTen = [];
  toCart: boolean = false;
  toggleBool: boolean = true;

  constructor(
    private domainService: DomainService,
    //private domainarrayService: DomainarrayService,
    private tldService: TldService,
    private inputService: InputTextService,
  ) { }

  ngOnInit(): void {
    this.tldService.getAll().subscribe(data => this.tldList = data);
  }

  domainSearch() {
    this.chooseDomain = true;
  }

  myDomain() {
    this.chooseDomain = false;
  }

  isDomainToCart(form: NgForm) {
    this.basket += 0;
    this.domRegInBasket = this.isDomain;
  }


  search(form: NgForm): void {
    this.showCard = true;
    if (this.inputText.includes('.')) {
      this.inputDomain = this.inputText.split('.')[0];
      this.inputTLD = this.inputText.split('.')[1];
    } else {
      this.inputDomain = this.inputText;
      this.inputTLD = '';
    }
    this.input = {
      id: 1,
      inputDomain: this.inputDomain,
      inputTld: this.inputTLD,
    };
    this.inputService.update(this.input).subscribe();
    this.tldCheck(this.inputTLD);
    this.generateDomain();
  }
  matchTld: boolean = false;
  tldCheck(tld: string): any {
    if (tld === '') {
      this.clickNumber = 1;
      return this.isNotTld = false;
    } else {
      this.tldService.getAll().subscribe(data => {

        if (data.some(item => item.TLD === tld)) {
          this.clickNumber = 0;
          this.isNotTld = false;
          return this.matchTld = true;
        } else {
          this.clickNumber = 0;
          return this.isNotTld = true;
        }
      })


      /* if (this.tldList.some(item => item.TLD === tld)) {
        return this.isNotTld = false;
      } else {
        return this.isNotTld = true;
      } */

    }
  }

  generateDomain() {
    this.domainArray = this.tldList.map(item => `${this.inputDomain}.${item.TLD}`);
    //this.firstTen = this.domainArray.slice(0, 10);
    /* this.firstTen.map(item => {
     this.domainArrayItem.domain = item; 
     this.domainarrayService.create(this.domainArrayItem).subscribe();
   }) */
    /* this.domainArray.map((item,index)=>
    this.domain1$ = this.domainService.get(index)
    ); */
    //this.generateCard(this.domainArray[0]);
  }
  //domain$: Observable<any>;
  generateCard(domain: string) {
    //this.domain$= this.domainService.get(domain);

  }

  moreDomain() {
    this.clickNumber += 1;
    this.isNotTld = false;
    this.matchTld = false;
    /*if (this.clickNumber === 0 || this.clickNumber === null) {
      
      this.domainArray.slice(0, 5); */
    /* this.firstTen.map(item => {
      this.domainArrayItem.domain = item;
      this.domainarrayService.create(this.domainArrayItem).subscribe(); */
    //})
    /*  } else {
       this.domainArray.slice(0, this.clickNumber * 5 + 5);
        */
    /* this.domainArray.map(item => {
      this.domainArrayItem.domain = item;
      this.domainarrayService.create(this.domainArrayItem).subscribe();
    }) */
    /* }*/
  }

  ev: any;
  plusBasket(ev: any, inCart: boolean): any {
    this.ev = ev;
    this.toCart = inCart;
    if (this.toCart) {
      const text = ev.target.parentElement.previousSibling.firstChild.lastChild.previousSibling.previousSibling.innerHTML;
      const text1 = ev.target.parentElement.previousSibling.firstChild.lastChild.previousSibling.innerHTML;

      if (text !== undefined) {
        this.basket += parseInt(text.split(' ')[2]);
      } else {
        this.basket += parseInt(text1.split(' ')[2]);
      }
      this.domRegInBasket = ev.target.parentElement.previousSibling.firstChild.firstChild.innerHTML;
    }
  }

  changeEvent(event: any) {
    if (event.target.checked) {
      this.toggleBool = false;
    }
    else {
      this.toggleBool = true;
    }
  }

  modal() {
    this.toCart = true;
    this.plusBasket(this.ev, this.toCart);
  }

  domainInfo(dom: string): void {
    this.domRegInBasket = dom;
  }

  basketInfo(bask: number): void {
    this.basket += bask;
  }

}