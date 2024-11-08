import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '@domain/code';
import { Router } from '@angular/router';

@Component({
    selector: 'template-doc',
    template: `
        <app-docsectiontext>
            <p>
                SpeedDial offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter. The button has its own <i>button</i> template, additional template named <i>icon</i> is provided to
                embed icon content for default button.
            </p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex items-end justify-center" style="position: 'relative'; height: '400px'">
                <p-toast />
                <p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
                    <ng-template pTemplate="button" let-toggleCallback="toggleCallback">
                        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
                            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--p-primary-color)" />
                                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--ground-background)" />
                                </mask>
                                <g mask="url(#mask0_1_52)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--p-primary-color)" />
                                </g>
                                <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--ground-background)" />
                                <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--ground-background)" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                                    fill="var(--ground-background)"
                                />
                                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                                    fill="var(--ground-background)"
                                />
                                <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--ground-background)" />
                                <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--ground-background)" />
                                <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--ground-background)" />
                                <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--ground-background)" />
                            </svg>
                        </p-button>
                    </ng-template>
                    <ng-template pTemplate="item" let-item let-toggleCallback="toggleCallback">
                        <div class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer" (click)="toggleCallback($event, item)">
                            <span [class]="item.icon"></span>
                            <span>
                                {{ item.label }}
                            </span>
                        </div>
                    </ng-template>
                </p-speeddial>
            </div>
        </div>
        <app-code [code]="code" selector="speed-dial-template-demo"></app-code>
    `,
    providers: [MessageService]
})
export class TemplateDoc implements OnInit {
    items: MenuItem[] | undefined;
    code: Code = {
        basic: `<p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
    <ng-template pTemplate="button" let-toggleCallback="toggleCallback">
        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
            <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="..."
                    fill="var(--p-primary-color)"
                />
                <path
                    d="..."
                    fill="var(--ground-background)"
                />
            </svg>
        </p-button>
    </ng-template>
    <ng-template pTemplate="item" let-item let-toggleCallback="toggleCallback">
        <div
            class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
            (click)="toggleCallback($event, item)"
        >
            <span [class]="item.icon"></span>
            <span>
                {{ item.label }}
            </span>
        </div>
    </ng-template>
</p-speeddial>`,

        html: `<div class="card">
    <div class="flex items-end justify-center" style="position: 'relative'; height: '400px'">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
            <ng-template pTemplate="button" let-toggleCallback="toggleCallback">
                <p-button outlined styleClass="border" (click)="toggleCallback($event)">
                    <svg
                        width="31"
                        height="33"
                        viewBox="0 0 31 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                            fill="var(--p-primary-color)"
                        />
                        <mask
                            id="mask0_1_52"
                            style="mask-type:luminance"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="31"
                            height="33"
                        >
                            <path
                                d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                                fill="var(--ground-background)"
                            />
                        </mask>
                        <g mask="url(#mask0_1_52)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                                fill="var(--p-primary-color)"
                            />
                        </g>
                        <path
                            d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                            fill="var(--ground-background)"
                        />
                    </svg>
                </p-button>
            </ng-template>
            <ng-template pTemplate="item" let-item let-toggleCallback="toggleCallback">
                <div
                    class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
                    (click)="toggleCallback($event, item)"
                >
                    <span [class]="item.icon"></span>
                    <span>
                        {{ item.label }}
                    </span>
                </div>
            </ng-template>
        </p-speeddial>
    </div>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'speed-dial-template-demo',
    templateUrl: './speed-dial-template-demo.html',
    standalone: true,
    imports: [SpeedDialModule, ToastModule, ButtonModule],
    providers: [MessageService]
})
export class SpeedDialTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                },
            },
        ];
    }
}`
    };

    constructor(
        private messageService: MessageService,
        private router: Router
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                }
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                }
            }
        ];
    }
}
