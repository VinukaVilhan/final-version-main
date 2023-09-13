// data.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UserProfile } from '../shared/models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) {}

  // Add user profile
  addUserProfile(profile: UserProfile) {
    return this.afs.collection('/UserProfiles').add(profile);
  }

  // Get user profile by user ID
  getUserProfile(userId: string) {
    return this.afs.collection('/UserProfiles').doc(userId).valueChanges();
  }

  // Update user profile
  updateUserProfile(profile: UserProfile) {
    return this.afs.collection('/UserProfiles').doc(profile.id).update({
      email: profile.email,
      mobile: profile.mobile,
      first_name: profile.first_name,
      last_name: profile.last_name
    });
  }
}
