<script setup>
import FormInput from './FormInput.vue'

defineProps({
  label: String,
  systole: [String, Number],
  diastole: [String, Number],
  disabled: Boolean
})

defineEmits(['update:systole', 'update:diastole'])
</script>

<template>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <FormInput
      :label="`${label} - Systole`"
      type="number"
      :modelValue="systole"
      :disabled="disabled"
      @update:modelValue="$emit('update:systole', $event)"
    />

    <FormInput
      :label="`${label} - Diastole`"
      type="number"
      :modelValue="diastole"
      :disabled="disabled"
      @update:modelValue="$emit('update:diastole', $event)"
    />
  </div>
</template>