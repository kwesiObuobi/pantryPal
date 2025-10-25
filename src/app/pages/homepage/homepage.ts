import { Component } from '@angular/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { Categories } from "../../components/categories/categories";

@Component({
  selector: 'app-homepage',
  imports: [HeroSection, Categories],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
