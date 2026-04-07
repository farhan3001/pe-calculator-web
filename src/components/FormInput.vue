<script setup>
defineProps({
  id: String,
  label: String,
  type: String,
  placeholder: String,
  modelValue: [String, Number],
  disabled: Boolean
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium mb-1">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
      :class="{
        'opacity-70 bg-gray-100 cursor-not-allowed': disabled
      }"
    />
  </div>
</template>