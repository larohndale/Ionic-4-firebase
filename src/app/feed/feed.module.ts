import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FeedPage } from './feed.page';
import { CommentsPage } from '../comments/comments.component';


const routes: Routes = [
    {
        path: '',
        component: FeedPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [FeedPage],
    entryComponents: []
})
export class FeedPageModule { }
