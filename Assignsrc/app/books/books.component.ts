import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent
{
  public booksAngular = ['Angular from Scratch','Angular Projects - Third Edition','Angular Router','Angular-Buch (German)'];

  public booksNodeJS = ['Node.js Design Patterns','Beginning Node.js','Get Programming with Node.js','Automating with Node.js'];

  public booksAndroid = ['Android Programming: The Big Nerd Ranch Guide','Android Design Patterns: Interaction Design Solutions for Developers','Mastering Android Studio 3: Build Dynamic and Robust Android Applications','The Busy Coders Guide to Advanced Android Development'];

  public booksBigData = ['Big Data: A Revolution That Will Transform How We Live, Work, and Think','Everybody Lies: Big Data','Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems','Too Big to Ignore: The Business Case for Big Data'];

  public booksAI = ['Artificial Intelligence: A Modern Approach','Life 3.0','Superintelligence: Paths, Dangers, Strategies','Human Compatible'];
}
