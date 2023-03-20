import { defineStore } from "pinia";
import { User } from "@/types/User";
import { Subscription } from "@/types/Subscription";

interface UserState {
  user: User | null;
  subscription: Subscription[] | null;
}

const defaultUserState: UserState = {
  user: null,
  subscription: null,
};

export const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      user: null,
      subscription: null,
    };
  },
  getters: {
    isAdmin(): boolean {
      if (this.user) {
        return this.user.role === 2;
      } else {
        return false;
      }
    },
    isPremium(): boolean {
      if (this.subscription) {
        return this.subscription[0] && this.subscription[0].name === "Premium";
      } else {
        return false;
      }
    },
    getUser(): User | null {
      return this.user;
    },
    getSubscription(): Subscription[] | null {
      return this.subscription;
    },
  },
  actions: {
    setVerified() {
      if (this.user) {
        this.user.isVerified = true;
      }
    },
    setUser(user: User) {
      this.user = user;
    },
    setSubscription(subscription: Subscription[]) {
      this.subscription = subscription;
    },
    logout() {
      this.$state = defaultUserState;
    },
  },
});
