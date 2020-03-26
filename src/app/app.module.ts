import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HelplineComponent } from './helpline/helpline.component';
import { TestCentresComponent } from './test-centres/test-centres.component';
import { ChartsComponent } from './home/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './home/my-line-chart/my-line-chart.component';
import { NationalityPieComponent } from './home/nationality-pie/nationality-pie.component';
import { GenderIndiaChartComponent } from './home/gender-india-chart/gender-india-chart.component';
import { AgeGenderIndiaComponent } from './home/age-gender-india/age-gender-india.component';
import { SourcesComponent } from './sources/sources.component';
import { FooterComponent } from './footer/footer.component';
import {WorldwideComponent} from './worldwide/worldwide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HelplineComponent,
    TestCentresComponent,
    ChartsComponent,
    MyLineChartComponent,
    NationalityPieComponent,
    GenderIndiaChartComponent,
    AgeGenderIndiaComponent,
    SourcesComponent,
    FooterComponent,
    WorldwideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ChartsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
