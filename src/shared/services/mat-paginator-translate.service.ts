import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class MatPaginationIntlService extends MatPaginatorIntl {
  constructor(private translateService: TranslateService) {
    super();


    // React whenever the language is changed
    this.translateService.onLangChange.subscribe((_event: Event) => {
      this.translateLabels();
    });

    // Initialize the translations once at construction time
    this.translateLabels();
  }

  getRangeLabel = (page: number, pageSize: number, length: number): string => {
    const of = this.translateService ? this.translateService.instant("I18N.MAT_PAGINATOR.OF") : "of";
    if (length === 0 || pageSize === 0) {
      return "0 " + of + " " + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;

    const endIndex = Math.min(startIndex + pageSize, length);
    return startIndex + 1 + " - " + endIndex + " " + of + " " + length;
  };

  injectTranslateService(translate: TranslateService): void {
    this.translateService = translate;

    this.translateService.onLangChange.subscribe(() => {
      this.translateLabels();
    });

    this.translateLabels();
  }

  translateLabels(): void {
     
    this.firstPageLabel = this.translateService.instant("FIRST_PAGE_LABEL");
    this.itemsPerPageLabel = this.translateService.instant("ITEMS_PER_PAGE_LABEL");
    this.lastPageLabel = this.translateService.instant("LAST_PAGE_LABEL");
    this.nextPageLabel = this.translateService.instant("NEXT_PAGE_LABEL");
    this.previousPageLabel = this.translateService.instant("PREVIOUS_PAGE_LABEL");
    this.changes.next(); // Fire a change event to make sure that the labels are refreshed
  }
}