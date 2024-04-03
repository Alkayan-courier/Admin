import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import faCaretUp from '@iconify/icons-fa-solid/caret-up';
import faCaretDown from '@iconify/icons-fa-solid/caret-down';
import icHelp from '@iconify/icons-ic/help-outline';
import icShare from '@iconify/icons-ic/remove-red-eye';
import { Router } from '@angular/router';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { scaleInOutAnimation } from '../../animations/scale-in-out.animation';
import { fadeInUp400ms } from '../../animations/fade-in-up.animation';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleInOutAnimation, fadeInUp400ms]
})
export class DynamicCardComponent implements OnInit {

  @Input() icon: any;
  @Input() value: number;
  @Input() price: number;
  @Input() label: string;
  @Input() change: number;
  @Input() helpText: string;
  @Input() color: any;
  @Input() url: string;

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  icHelp = icHelp;
  icShare = icShare;
  icTimer = icTimer;
  public imagesUrl = environment.imagesUrl;
  showButton: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSheet() {
    this.router.navigate([this.url])
  }

}
