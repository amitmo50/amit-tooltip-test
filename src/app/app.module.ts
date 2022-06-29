import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgModule } from '@ironsource/fusion-ui/components/svg';
import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';
import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
import { RadioGroupModule } from '@ironsource/fusion-ui/components/radio-group/v2';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ButtonModule,
    SvgModule.forRoot({
      assetsPath: 'https://fusion.ironsrc.net/assets',
    }),
    IconModule,
    TooltipModule,
    RadioGroupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
