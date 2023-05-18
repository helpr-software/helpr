<script setup lang="ts">
import LanguageSelector from "~/components/settings/LanguageSelector.vue";
import { ImplicitFlowErrorResponse, ImplicitFlowSuccessResponse } from "vue3-google-signin";

definePageMeta({
  name: "Login",
  title: "Login",
  description: "Login to your account",
});

const user = computed(() => useUserStore().getUser);

watch(user, (user) => {
  if (user) {
    useRouter().push("/");
  }
});

async function handleOnSuccess(response: ImplicitFlowSuccessResponse) {
  const { data } = await useFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      code: response.code,
    }),
  });
  console.log("Result: ", data);
}

function handleOnError(errorResponse: ImplicitFlowErrorResponse) {
  console.log("Error: ", errorResponse);
}

const { login } = useCodeClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
});
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <Logo :isText="false" class="flex justify-center" :size="12" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
        {{ $t("login.signin_to_your_account") }}
      </h2>
    </div>
    <button @click="login()" class="gradient text-white font-bold py-2 px-4 rounded mt-6 mx-auto">
      {{ $t("login.login_with_google") }}
    </button>
    <div class="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center items-center">
      <LanguageSelector :is-text="true" class="mt-6" />
    </div>
  </div>
</template>
