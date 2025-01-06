<template>
    <div
        class="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
        style="width: 400px; height: 400px"
    >
        <!-- 동적으로 이미지 경로를 사용하여 SVG 파일 불러오기 -->
        <div class="w-full h-2/3 mb-4">
            <!-- 이미지 영역을 고정 높이로 설정 -->
            <img
                :src="`/assets/images/${title.toLowerCase()}.png`"
                alt="Card Image"
                class="object-fill w-full h-full rounded-lg"
            />
        </div>
        <div class="flex flex-col items-center justify-center w-full h-1/3">
            <!-- 텍스트 영역을 이미지 아래에 고정 -->
            <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
            <p class="text-sm text-gray-400">Description about {{ title }}.</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
// Props로 title을 받음
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
/* Aspect ratio for square image */
.aspect-w-1 {
    aspect-ratio: 1 / 1;
}
.aspect-h-1 {
    aspect-ratio: 1 / 1;
}
</style>
