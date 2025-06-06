<script setup lang="ts">
import {useAuth, useNuxtApp} from "#imports";

const {user, signOut} = await useAuth();

definePageMeta({
  middleware: ["auth"]
})

const { $api } = useNuxtApp()

$api.get('api/user')
    .then((response: any) => {
      console.log(response.data)
    })
    .catch((error: any) => {
      console.log(error)
    })
</script>

<template>
  <div v-if="user">
    <p>Hello {{ user.name }}</p>
    <p>Your email is {{ user.email }}</p>

    <button @click="signOut">
      Sign Out
    </button>
  </div>
</template>
