import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { BannerComponent } from './components/banner/banner.component';
import { LegalServicesComponent } from './components/legal-services/legal-services.component';
import { CtaComponent } from './components/cta/cta.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DividerComponent,
    BannerComponent,
    LegalServicesComponent,
    CtaComponent,
    FaqComponent,
    FooterComponent,
    ChatComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
