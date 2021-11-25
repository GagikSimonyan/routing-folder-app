import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupComponent } from "./modules/popup/popup.component";
import { Folder } from "./models/folder.model";
import { FolderService } from "./services/folder.service";
import { first } from "rxjs/operators";
import { PlaceholderDirective } from "./directives/placeholder.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(PlaceholderDirective) popupHost!: PlaceholderDirective;
  hostViewContainerRef!: ViewContainerRef;
  componentRef!: ComponentRef<PopupComponent>;
  folders: Folder[] = [];

  constructor(
    private resolver: ComponentFactoryResolver,
    private service: FolderService
  ) {}

  ngOnInit(): void {
    this.getFolders();
  }

  showPopup() {
    const popupComponentFactory = this.resolver.resolveComponentFactory(PopupComponent);
    this.hostViewContainerRef = this.popupHost.viewContainerRef;
    this.hostViewContainerRef.clear();
    this.componentRef = this.hostViewContainerRef.createComponent(popupComponentFactory);

    this.componentRef.instance.close
      .pipe(first())
      .subscribe(() => {
        this.closePopup();
      });

    this.componentRef.instance.add
      .pipe(first())
      .subscribe(folder => {
        this.folders.push(folder);
        this.closePopup();
      });
  }

  private closePopup(): void {
    this.hostViewContainerRef.clear();
  }

  getFolders() {
    this.service.getFolders().subscribe(data => {
      this.folders = data;
    })
  }
}
