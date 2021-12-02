import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { PopupComponent } from "./modules/popup/popup.component";
import { Folder } from "./models/folder.model";
import { FolderService } from "./services/folder.service";
import { first, switchMap } from "rxjs/operators";
import { PlaceholderDirective } from "./directives/placeholder.directive";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(PlaceholderDirective) popupHost!: PlaceholderDirective;
  hostViewContainerRef!: ViewContainerRef;
  componentRef!: ComponentRef<PopupComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private folderService: FolderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private injector: Injector
  ) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    console.log(this.router)
  }

  showPopup() {
    const popupComponentFactory = this.resolver.resolveComponentFactory(PopupComponent);
    // popupComponentFactory.create(this.injector)
    this.hostViewContainerRef = this.popupHost.viewContainerRef;
    this.hostViewContainerRef.clear();
    this.componentRef = this.hostViewContainerRef.createComponent(popupComponentFactory);

    this.componentRef.instance.close
      .pipe(first())
      .subscribe(() => {
        this.closePopup();
      });

    this.componentRef.instance.add
      .pipe(
        first(),
        switchMap(folder => this.folderService.addFolder(folder))
      )
      .subscribe(folder => {
        this.folderService.onAddFolder$.next(folder)
        this.closePopup();
      });
  }

  private closePopup(): void {
    this.hostViewContainerRef.clear();
  }

}
