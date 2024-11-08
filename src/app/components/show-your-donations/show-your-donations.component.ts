import { Component, makeEnvironmentProviders } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-show-your-donations',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule, TagModule, ConfirmPopupModule, ConfirmDialogModule, ToastModule],
  templateUrl: './show-your-donations.component.html',
  styleUrls: ['./show-your-donations.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class ShowYourDonationsComponent {
  donations: any[] = [];
  delete: boolean = false;
  noResult: boolean = false;

  constructor(private api: DonationService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.api.GetYourDonations().subscribe((data) => {
      this.donations = data;
      this.noResult = this.donations.length === 0;
    });
  }


  getStatus(donation: any) {
    return donation.IsActive ? 'success' : 'danger';
  }

  getImage(category: string): string {
    switch (category) {
      case 'MakeUp':
        return '/assets/images/makeup.png';
      case 'Photography':
        return '/assets/images/camera.png';
      case 'Music':
        return '/assets/images/music.png';
      case 'Hair styling':
        return '/assets/images/Hair styling.png';
      case 'Babysitter':
        return '/assets/images/Babysitter.png';
      case 'Baking & Cooking':
        return '/assets/images/Baking cooking.png';
      case 'Maintenance':
        return '/assets/images/maintenance.png';
      case 'Household':
        return '/assets/images/household.png';
      case 'Transportation':
        return '/assets/images/Transportation.png';
      default:
        return '/assets/images/default.png';
    }
  }

  deleteDonation(id: number) {
    this.api.DeleteDonation(id).subscribe(() => {
    });
  }

  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this donation?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      accept: () => {
        this.deleteDonation(id);
        this.donations = this.donations.filter(d => d.id != id)
      },
      reject: () => {
      }
    });
  }
}
