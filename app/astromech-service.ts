import { Injectable } from '@angular/core';
import { ASTROMECHS } from './mock-astromechs' 
import { Astromech } from './astromech' 

@Injectable()
export class AstromechService {
      getAstromechs(): Promise<Astromech[]> {
          return Promise.resolve(ASTROMECHS)
      } 
}

