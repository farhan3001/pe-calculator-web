<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  label: String,
  modelValue: [String, Number],
  options: Array,
  disabled: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectRef = ref(null)

function handleChange(event) {
  if (props.disabled) return
  emit('update:modelValue', event.target.value)
  isOpen.value = false
  selectRef.value?.blur()
}

function clearSelection() {
  if (props.disabled) return
  emit('update:modelValue', '')
  isOpen.value = false
  selectRef.value?.blur()
}
</script>

<template>
  <div class="mb-4 relative">
    <label :for="id" class="block text-sm font-medium mb-1">
      {{ label }}
    </label>

    <div class="relative">
      <!-- Select -->
      <select
        ref="selectRef"
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        @change="handleChange"
        @focus="!disabled && (isOpen = true)"
        @blur="isOpen = false"
        class="w-full appearance-none border border-gray-300 p-2 pr-16 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        :class="{
          'opacity-70 bg-gray-100 cursor-not-allowed': disabled
        }"
      >
        <option disabled value="" hidden>Pilih...</option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      <!-- Right icons -->
      <div class="absolute inset-y-0 right-3 flex items-center space-x-2">

        <!-- Clear Button -->
        <button
          v-if="modelValue && !disabled"
          type="button"
          @click.stop="clearSelection"
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Arrow -->
        <svg
          class="w-4 h-4 transform transition-transform duration-200"
          :class="{ 'rotate-180': isOpen && !disabled }"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
</template>