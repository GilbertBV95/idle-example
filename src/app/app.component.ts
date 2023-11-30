import { inject, Component, OnInit } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'idle-example';
    private idle = inject(Idle);

    constructor() {
        this.idle.setIdle(5)
        this.idle.setTimeout(1000)
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES)

        this.idle.onIdleStart.subscribe(() => {
            console.log('empezaste a vaguear');
        })

        this.idle.onIdleEnd.subscribe(() => {
            console.log('empezaste a trabajar')
        })

        this.idle.onTimeoutWarning.subscribe(() => {
            console.log('casi te vas a salir')
        })

        this.idle.onTimeout.subscribe(() => {
            this.idle.stop();
            console.log('saliste men')
        })
    }

    ngOnInit() {
        this.idle.watch()
    }
}
