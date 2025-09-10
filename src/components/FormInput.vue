<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium mb-1">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
</template>

<script setup>
defineProps(['id', 'label', 'type', 'placeholder', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
