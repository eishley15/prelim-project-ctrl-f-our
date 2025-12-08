import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-officers',
  imports: [Footer],
  templateUrl: './officers.html',
  styleUrls: ['./officers.css']
})

export class Officers implements OnInit, OnDestroy {
  private lastScrollTop = 0;
  private scrollTimeout: any;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      document
        .querySelectorAll('.animate-on-scroll, .animate-on-scroll-up')
        .forEach((el) => el.classList.add('animate-in'));
    }, 120);
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingUp = scrollTop < this.lastScrollTop;

    if (isScrollingUp && scrollTop > 50) {
      this.triggerScrollUpAnimations();
    }

    this.checkElementsInView();
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  private triggerScrollUpAnimations() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && !el.classList.contains('animate-in')) {
          el.classList.add('animate-in');
        }
      });
    }, 60);
  }

  private checkElementsInView() {
    const elements = document.querySelectorAll('.animate-on-scroll-up');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

      if (isVisible && !el.classList.contains('animate-in')) {
        el.classList.add('animate-in');
      }
    });
  }

  officers = [
    {
      name: 'Micah Lapuz',
      role: 'Executive Head',
      status: 'Active',
      gender: 'Female',
      number: '20560318',
      email: 'mglapuz1@student.hau.edu.ph',
      photo: '/officers/micah-lapuz.jpg'
    },

    {
      name: 'Christine Yunun',
      role: 'Executive Head',
      status: 'Active',
      gender: 'Female',
      number: '20560318',
      email: 'cdyunun@student.hau.edu.ph',
      photo: '/officers/christine-yunun.jpg'
    },

    {
      name: 'Kyle Payawal',
      role: 'Marketing',
      status: 'Active',
      gender: 'Male',
      number: '20833277',
      email: 'kgpayawal@student.hau.edu.ph',
      photo: '/officers/kyle-payawal.jpg'
    },

    {
      name: 'Maxene Quiambao',
      role: 'Marketing',
      status: 'Active',
      gender: 'Female',
      number: '20950380',
      email: 'mpquiambao@student.hau.edu.ph',
      photo: '/officers/maxene-quiambao.jpg'
    },

    {
      name: 'Charles Garcia',
      role: 'Creatives',
      status: 'Active',
      gender: 'Male',
      number: '20966973',
      email: 'cbgarcia2@student.hau.edu.ph',
      photo: '/officers/charles-garcia.jpg'
    },

    {
      name: 'Leewel Tumang',
      role: 'Creatives',
      status: 'Active',
      gender: 'Female',
      number: '21002670',
      email: 'lntumang@student.hau.edu.ph',
      photo: '/officers/leweel-tumang.jpg'
    },

    {
      name: 'Jayvee Mercado',
      role: 'Finance',
      status: 'Active',
      gender: 'Male',
      number: '20913658',
      email: 'jvmercado@student.hau.edu.ph',
      photo: '/officers/jayvee-mercado.jpg'
    },

    {
      name: 'Kitt Dumas',
      role: 'Finance',
      status: 'Active',
      gender: 'Male',
      number: '20624951',
      email: 'kpdumas1@student.hau.edu.ph',
      photo: '/officers/kitt-dumas.jpg'
    },

    {
      name: 'Kurt Sicat',
      role: 'Creatives',
      status: 'Active',
      gender: 'Male',
      number: '20963338',
      email: 'ktsicat1@student.hau.edu.ph',
      photo: '/officers/kurt-sicat.jpg'
    },

    {
      name: 'Ryna David',
      role: 'Operations',
      status: 'Active',
      gender: 'Female',
      number: '20956588',
      email: 'rfdavid1@student.hau.edu.ph',
      photo: '/officers/ryna-david.jpg'
    },

    {
      name: 'Alexander Manabat',
      role: 'Operations',
      status: 'Active',
      gender: 'Male',
      number: '20870730',
      email: 'almanabat1@student.hau.edu.ph',
      photo: '/officers/alexander-manabat.jpg'
    },

    {
      name: 'Karl Dungca',
      role: 'Internal',
      status: 'Active',
      gender: 'Male',
      number: '20961742',
      email: 'ktdungca@student.hau.edu.ph',
      photo: '/officers/karl-dungca.jpg'
    },

    {
      name: 'Krisean Tienzo',
      role: 'Internal',
      status: 'Active',
      gender: 'Female',
      number: '20956724',
      email: 'kgtienzo@student.hau.edu.oh',
      photo: '/officers/krisean-tienzo.jpg'
    },

    {
      name: 'Clarence Parungao',
      role: 'Internal',
      status: 'Active',
      gender: 'Female',
      number: '20956713',
      email: 'ccparungao@student.hau.edu.ph',
      photo: '/officers/clarence-parungao.jpg'
    },

    {
      name: 'Carla Joves',
      role: 'External',
      status: 'Active',
      gender: 'Female',
      number: '20861370',
      email: 'cdjoves1@student.hau.edu.ph',
      photo: '/officers/carla-joves.jpg'
    },

    {
      name: 'Ericka Gavino',
      role: 'External',
      status: 'Active',
      gender: 'Female',
      number: '20845348',
      email: 'esgavino@student.hau.edu.ph',
      photo: '/officers/ericka-gavino.jpg'
    }
  ];

}
