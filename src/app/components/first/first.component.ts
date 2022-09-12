import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6210564',
      name: 'Phattarapong Pimhom',
      gender: 'Male',
      birthyear: 2000,
      email: 'boom210943@gmail.com',
      phone: '085-4431525',
      img: 'https://scontent.fphs3-1.fna.fbcdn.net/v/t1.6435-9/123424223_2099666576830721_5280238356929135027_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEE7zP3En2IHzuIe3s9A2mbMBviwiqxpb8wG-LCKrGlv9W2PSfxPJpqXJWHlKfHIGi_XmyNsrbGRA_YBVEuViur&_nc_ohc=Fnnh_xoDhIsAX_dFVTK&_nc_ht=scontent.fphs3-1.fna&oh=f864e4dc03651a2cc46d012bff1961a2&oe=6187B7AF',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  geturl(){
    return this.profile.img;
  }

  onClickShow(){
    alert(this.profile.address);
  }
}
