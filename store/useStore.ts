import { create } from 'zustand';

interface UserState {
  // Step 1
  email: string;
  name: string;
  // Step 2
  dob: string;
  gender: string;
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  // Step 3
  goals: string[];
  // Step 4
  activityLevel: string;
  // Step 5
  username: string;
  bio: string;
  
  updateData: (data: Partial<UserState>) => void;
  reset: () => void;
}

export const useStore = create<UserState>((set) => ({
  email: '',
  name: '',
  dob: '',
  gender: '',
  height: 170,
  weight: 70,
  unit: 'metric',
  goals: [],
  activityLevel: '',
  username: '',
  bio: '',
  
  updateData: (data) => set((state) => ({ ...state, ...data })),
  reset: () => set({
    email: '', name: '', dob: '', gender: '', height: 170, weight: 70, unit: 'metric', goals: [], activityLevel: '', username: '', bio: ''
  })
}));
