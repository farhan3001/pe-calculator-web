<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium mb-1">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option value="" disabled>Pilih...</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps(['id', 'label', 'modelValue', 'options'])
defineEmits(['update:modelValue'])
</script>
