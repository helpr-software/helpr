<script setup lang="ts">
import Avatar from "~/components/Avatar.vue";
const userId = useRoute().params.userId;

const { data: user, error } = await useFetch("/api/getUserById", {
  key: "getUserById-" + userId,
  method: "GET",
  params: {
    userId,
  },
});

if (error.value !== null && !user.value) {
  throw createError({ statusCode: 404, message: "User not found" });
}

useHead({
  title: "Profile - " + user.value?.firstname + " " + user.value?.lastname,
  meta: [
    {
      name: "description",
      content: "Profile",
    },
  ],
});
</script>

<template>
  <div class="relative z-0 flex flex-1 overflow-hidden bg-primary">
    <main class="relative z-0 flex-1 focus:outline-none xl:order-last">
      <article>
        <div>
          <div>
            <div class="h-32 w-full object-cover lg:h-48 bg-accent-faded"></div>
          </div>
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="-mt-12 sm:-mt-16 sm:items-end sm:space-x-5">
              <div class="flex items-center gap-4">
                <Avatar :user="user" size="profile" />
                <div>
                  <h1 class="text-2xl font-bold text-primary">{{ user.firstname }} {{ user.lastname }}</h1>
                  <p class="text-gray-400">{{ user.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-muted my-8" />
      </article>
    </main>
  </div>
</template>
