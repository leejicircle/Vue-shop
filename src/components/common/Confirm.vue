<script setup lang="ts">
const emit = defineEmits(["confirm"]);
</script>

<template>
  <input type="checkbox" id="confirm-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">정말 구매하시겠습니까?</h3>
      <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
      <div class="modal-action">
        <label for="confirm-modal" class="btn btn-primary" @click="$emit('confirm')">네</label>
        <label for="confirm-modal" class="btn btn-outline">아니오</label>
      </div>
    </div>
  </div>
</template>
