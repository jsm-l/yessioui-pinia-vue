<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="email" v-model.trim="email" />
            <input
                type="password"
                placeholder="password"
                v-model.trim="password"
            />
            <button type="submit" :disabled="userStore.loadingUser">
                Acceder
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

const email = ref("josemlescano@gmail.com");
const password = ref("cactus");

const handleSubmit = () => {
    if (!email.value || password.value.length < 6) {
        alert("ingresa los campos");
    }

    userStore.login(email.value, password.value);
};
</script>