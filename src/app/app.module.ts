import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { AlphabetPrefixService } from './components/pipes/alphabet-prefix.service';
import { ElectronService } from './providers/electron.service';
import { HomeComponent } from './components/home/home.component';
import { ResolutionFilterService } from './components/pipes/resolution-filter.service';
import { ShowLimitService } from './components/pipes/show-limit.service';
import { TagsSaveService } from './components/home/tags/tags-save.service';
import { TagsService } from './components/home/tags/tags.service';
import { WordFrequencyService } from './components/pipes/word-frequency.service';

import { AppComponent } from './app.component';
import { ClipComponent } from './components/home/clip/clip.component';
import { DetailsComponent } from './components/home/details/details.component';
import { DonutComponent } from './components/donut/donut.component';
import { FileComponent } from './components/home/file/file.component';
import { FilmstripComponent } from './components/home/filmstrip/filmstrip.component';
import { FullViewComponent } from './components/home/full/full.component';
import { PreviewComponent } from './components/home/thumbnail/preview.component';
import { SheetComponent } from './components/home/sheet/sheet.component';
import { SimilarityService } from './components/pipes/similarity.service';
import { SliderFilterComponent } from './components/home/slider-filter/slider-filter.component';
import { StatisticsComponent } from './components/home/statistics/statistics.component';
import { TagsComponent } from './components/home/tags/tags.component';
import { TopComponent } from './components/home/top/top.component';

import { AlphabetPrefixPipe } from './components/pipes/alphabet-prefix.pipe';
import { CountPipe } from './components/pipes/count.pipe';
import { FileSearchPipe } from './components/pipes/file-search.pipe';
import { FileSizePipe } from './components/pipes/file-size.pipe';
import { FolderArrowsPipe } from './components/pipes/folder-arrows.pipe';
import { FolderViewPipe } from './components/pipes/folder-view.pipe';
import { LengthPipe } from './components/pipes/length.pipe';
import { MagicSearchPipe } from './components/pipes/magic-search.pipe';
import { RandomizePipe } from './components/pipes/randomize.pipe';
import { ResolutionFilterPipe } from './components/pipes/resolution-filter.pipe';
import { SimilarityPipe } from './components/pipes/similarity.pipe';
import { TagFilterPipe } from './components/home/tags/tag-filter.pipe';
import { TagMatchPipe } from './components/home/tags/tag-match.pipe';
import { WordFrequencyPipe } from './components/pipes/word-frequency.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AlphabetPrefixPipe,
    AppComponent,
    ClipComponent,
    CountPipe,
    DetailsComponent,
    DonutComponent,
    FileComponent,
    FileSearchPipe,
    FileSizePipe,
    FilmstripComponent,
    FolderArrowsPipe,
    FolderViewPipe,
    FullViewComponent,
    HomeComponent,
    LengthPipe,
    MagicSearchPipe,
    PreviewComponent,
    RandomizePipe,
    ResolutionFilterPipe,
    SheetComponent,
    SimilarityPipe,
    SliderFilterComponent,
    StatisticsComponent,
    TagFilterPipe,
    TagMatchPipe,
    TagsComponent,
    TopComponent,
    WordFrequencyPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    VirtualScrollerModule
  ],
  providers: [
    AlphabetPrefixService,
    ElectronService,
    FileSearchPipe,
    ResolutionFilterService,
    ShowLimitService,
    SimilarityService,
    TagsSaveService,
    TagsService,
    WordFrequencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
