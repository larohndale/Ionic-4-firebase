import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children:
            [
                {
                    path: 'tab1',
                    children:
                        [
                            {
                                path: 'tab1', loadChildren: () =>
                                    import("../tab1/tab1.module").then(
                                        (m) => m.Tab1PageModule
                                    ),
                            },

                        ]
                },
                {
                    path: 'tab2',
                    children:
                        [
                            {
                                path: 'tab2ß', loadChildren: () =>
                                    import("../tab2/tab2.module").then(
                                        (m) => m.Tab2PageModule
                                    ),
                            },
                        ]
                },
                {
                    path: 'tab3',
                    children:
                        [
                            {
                                path: 'tab3', loadChildren: () =>
                                    import("../tab3/tab3.module").then(
                                        (m) => m.Tab3PageModule
                                    ),
                            },
                        ]
                },
                {
                    path: 'profile',
                    children:
                        [
                            {
                                path: 'tab1', loadChildren: () =>
                                    import("../profile/profile.module").then(
                                        (m) => m.ProfilePageModule
                                    ),
                            },
                        ]
                },
                {
                    path: 'feed',
                    children:
                        [
                            {
                                path: 'feed', loadChildren: () =>
                                    import("../feed/feed.module").then(
                                        (m) => m.FeedPageModule
                                    ),
                            },
                        ]
                },
                {
                    path: '',
                    redirectTo: '/tabs/feed',
                    pathMatch: 'full'
                }
            ]
    },
    {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
    }
];

@NgModule({
    imports:
        [
            RouterModule.forChild(routes)
        ],
    exports:
        [
            RouterModule
        ]
})
export class TabsPageRoutingModule { }