import { Injectable } from '@angular/core';

@Injectable()
export class SuggestService {
  constructor() {}
  getAllsuggest() {
    return [
      {
        "detail": "The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.",
      },
      {
        "detail": "Through Michael's life the nature of the family business becomes clear. of the family,"
      },
      {
        "detail": "kind and benevolent to those who give respect, but given to ruthless gainst the good of the family.",
      },
      {
        "detail": "The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.",
      },
      {
        "detail": "His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.",
      },
      {
        "detail": "His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.",
      }
    ];
  }
}
