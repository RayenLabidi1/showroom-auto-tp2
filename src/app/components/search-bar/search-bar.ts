import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;

  // Partie C : la liste envoyee par le composant parent (App)
  @Input() autos: Auto[] = [];

  // Partie D : evenement qui remonte la voiture choisie vers le parent
  @Output() selectAutoEvent = new EventEmitter<Auto>();

  foundAutos: Auto[] = [];
  searched = false;

  searchAutoList(brand: string) {
    const term = brand.trim().toLowerCase();
    this.searched = true;
    this.foundAutos = term
      ? this.autos.filter((auto) => auto.brand.toLowerCase().includes(term))
      : [];
  }

  selectedAuto(auto: Auto) {
    this.selectAutoEvent.emit(auto);
  }
}
