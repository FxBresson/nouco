import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar';
import { ServiceComponent } from './service/service';
import { WorkshopComponent } from './workshop/workshop';
import { CategorieComponent } from './categorie/categorie';
@NgModule({
	declarations: [SearchBarComponent,
    ServiceComponent,
    WorkshopComponent,
    CategorieComponent],
	imports: [],
	exports: [SearchBarComponent,
    ServiceComponent,
    WorkshopComponent,
    CategorieComponent]
})
export class ComponentsModule {}
