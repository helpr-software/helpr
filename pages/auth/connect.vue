<script setup lang="ts">
import LanguageSelector from "~/components/settings/LanguageSelector.vue";

definePageMeta({
  name: "Connect",
});

const email = ref("");
const token = computed(() => {
  return useRoute().query.token as string;
});

const loading = ref(false);
const toast = ref(false);

const signup = async () => {
  loading.value = true;
  const { data } = await useFetch("/api/auth/connect", {
    method: "POST",
    body: {
      email: email.value,
    },
  });
  console.log(data);
  loading.value = false;
};
</script>

<template>
  <div class="flex flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mx-auto w-full max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
        {{ $t("signup.signup_to_your_account") }}
      </h2>
    </div>
    <div class="mx-auto w-full sm:max-w-[480px] mt-6">
      <div class="bg-secondary py-12 shadow sm:rounded-lg px-12">
        <form class="flex-col flex gap-4" @submit.prevent="signup">
          <div class="flex flex-col gap-1">
            <label for="password" class="block text-sm font-medium leading-6 text-primary">
              {{ $t("signup.email") }}
            </label>
            <input id="email" name="email" type="email" autocomplete="email" required :placeholder="$t('signup.email')" class="input w-full" v-model="email" />
          </div>
          <div v-if="token">
            <div class="flex flex-col gap-1">
              <label for="password" class="block text-sm font-medium leading-6 text-primary"> Token </label>
              <input id="token" name="token" type="text" autocomplete="token" required placeholder="Token" class="input w-full" v-model="token" />
            </div>
          </div>
          <div class="mt-3">
            <ButtonPrimary :full-width="true" :pending="loading" type="submit" :text="$t('signup.signup')" @click="toast = true" />
          </div>
        </form>
      </div>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center items-center mt-4">
      <LanguageSelector :is-text="true" />
    </div>
    <ToastsBasic :show="toast" title="Success" description="You have successfully signed up!" @close="toast = false" />
  </div>
</template>
