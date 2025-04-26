import { Component } from '@angular/core';
import { BrazilStateEnum } from '../../../../shared/enums/BrazilStateEnum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../../services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  brazilStateList: string[] = Object.values(BrazilStateEnum);
  name: string = '';
  email: string = '';
  phone: string = '';
  state: string = '';
  referralSource: string = '';

  isChatVisible: boolean = false;
  formSubmitted: boolean = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.isVisible$.subscribe(visible => this.isChatVisible = visible)
  }

  hideChat() {
    this.chatService.hideChat();
  }

  get linkWithCustomMessage(): string {
    const msg = `- Nome: ${this.name}
- Email: ${this.email}
- Telefone: ${this.phone}
- Estado: ${this.state}
- Como conheceu: ${this.referralSource}

Olá, tudo bem? Gostaria de obter mais informações sobre os serviços jurídicos oferecidos pelo escritório. Desde já, agradeço a atenção.`;

    return `https://api.whatsapp.com/send/?phone=558173400912&text=${encodeURIComponent(
      msg
    )}&type=phone_number&app_absent=0`;
  }

  submitToSheet() {
    const payload = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      state: this.state,
      referralSource: this.referralSource,
    };

    fetch(
      'https://script.google.com/macros/s/AKfycby2Mo3D2YAQ7HmGXxHAgdBQObB1DIUZoaijO79b7I7KGVL4Yw0ZErVc8wNa0qsHhFRM/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        window.open(this.linkWithCustomMessage, '_blank');
        console.log('Enviado com sucesso');
        this.formSubmitted = !this.formSubmitted;
      })
      .catch((err) => {
        console.error('Erro ao enviar', err);
      });
  }
}
