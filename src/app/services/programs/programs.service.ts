import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Firestore, addDoc, collection, collectionData, doc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  private journalCollection: any
  private userId: any

  constructor(private firestore: Firestore, authService: AuthService) {
  }

  addProgram(program:any){

    const jouralRef = collection(this.firestore, 'programs');

    return addDoc(jouralRef,program)
  }

  getPrograms(userId:any): Observable<any[]> {

    const jouralRef = collection(this.firestore, 'programs')

    const refq = query(jouralRef,where('userId','==',userId))
    return collectionData(refq,{ idField: 'id'}) as Observable<any[]>
  }
}
