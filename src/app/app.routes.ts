import { Routes } from '@angular/router';
import { ShowAllUsersComponent } from './components/show-all-users/show-all-users.component';
import { HomeComponent } from './components/home/home.component';
import { ShowYourDonationsComponent } from './components/show-your-donations/show-your-donations.component';
import { MadeDonationsComponent } from './components/made-donations/made-donations.component';
import { ShowLikesComponent } from './components/show-likes/show-likes.component';
import { GetFilteredDonationsComponent } from './components/get-filtered-donations/get-filtered-donations.component';

export const routes: Routes = [
    { path: 'AllUsers', component: ShowAllUsersComponent },
    { path: 'AllDonations', component: GetFilteredDonationsComponent },
    { path: 'ShowYourDonations', component: ShowYourDonationsComponent },
    { path: 'YourMadeDonations', component: MadeDonationsComponent },
    { path: 'ShowYourLikes', component: ShowLikesComponent },
    { path: '', component: HomeComponent },
];