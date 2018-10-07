import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {FAQComponent} from './faq/faq.component';
import {MyFavouritesComponent} from './my-favourites/my-favourites.component';
import {ModernGardenComponent} from './modern-garden/modern-garden.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RegistreComponent} from './register/registre.component';
import {PayComponent} from './pay/pay.component';

//import {CardsComponent} from './cards/cards.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        {path: 'contactUs', component : ContactComponent},
        {path: 'register', component : RegistreComponent},
        {path: 'aboutUs', component : AboutUsComponent},
        {path: 'faq', component : FAQComponent},
        {path: 'my-favorites', component : MyFavouritesComponent},

        {path: 'pay', component : PayComponent},


        {path: 'modernGarden', component: ModernGardenComponent},
        {path: 'shoppingCart', component: ShoppingCartComponent},
        { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
        { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
        { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
        { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, //fix this
        { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
        // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
        { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
    ]
}];
