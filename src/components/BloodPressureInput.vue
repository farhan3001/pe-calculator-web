<template>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <FormInput
      :label="`${label} - Systole`"
      type="number"
      :modelValue="systole"
      @update:modelValue="$emit('update:systole', $event)"
    />
    <FormInput
      :label="`${label} - Diastole`"
      type="number"
      :modelValue="diastole"
      @update:modelValue="$emit('update:diastole', $event)"
    />
  </div>
</template>

<script setup>
import FormInput from './FormInput.vue'
defineProps(['label', 'systole', 'diastole'])
defineEmits(['update:systole', 'update:diastole'])
</script>
