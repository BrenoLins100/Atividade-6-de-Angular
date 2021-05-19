import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DisciplinaService } from './disciplina.service';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { NotasComponent } from './notas/notas.component';
import { HorariosComponent } from './horarios/horarios.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cadastrar', component: CadastrarComponent },
      { path: 'horarios', component: HorariosComponent},
      { path: 'listar', component: ListarComponent },
      { path: 'notas', component: NotasComponent}
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    CadastrarComponent,
    ListarComponent,
    NotasComponent,
    HorariosComponent
  ],
  bootstrap: [AppComponent],
  providers: [DisciplinaService]
})
export class AppModule {}
