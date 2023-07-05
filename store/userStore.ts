import { defineStore } from "pinia";
import { User } from "@/types/User";
import { Role } from "~/enums/Role";

interface UserState {
  user: User | null;
}

const defaultUserState: UserState = {
  user: null,
};

export const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      user: null,
    };
  },
  getters: {
    isAdmin(): boolean {
      if (this.user) {
        return this.user.role === Role.ADMIN;
      } else {
        return false;
      }
    },
    getUser(): User | null {
      return this.user;
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    logout() {
      this.$state = defaultUserState;
    },
  },
});
