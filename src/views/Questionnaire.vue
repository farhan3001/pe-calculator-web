<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-3xl shadow-md w-full max-w-4xl">

      <div class="flex justify-center">
        <img src="@/assets/logo_safe_prenatal.png" alt="Safe Prenatal Logo" class="h-32" />
      </div>

      <h1 class="text-2xl font-semibold text-center mb-8">Pre-Eclampsia Kalkulator</h1>

      <!-- Personal Info -->
      <div class="grid grid-cols-1 gap-4 mb-8">
        <FormInput id="nama" label="Nama" :modelValue="form.nama" @update:modelValue="val => form.nama = val" />
        <FormInput id="email" label="Email" :modelValue="form.email" @update:modelValue="val => form.email = val" />
        <FormInput id="noHp" label="No HP" :modelValue="form.noHp" @update:modelValue="val => form.noHp = val" />
        <FormInput id="namaFaskes" label="Nama Faskes" :modelValue="form.namaFaskes"
          @update:modelValue="val => form.namaFaskes = val" />
      </div>

      <div class="border-t border-dashed border-gray-400 my-6"></div>

      <!-- Questionnaire -->
      <h2 class="text-lg font-semibold mb-4">Daftar Pertanyaan</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FormInput id="hpht" label="HPHT" type="date" :modelValue="form.hpht"
          @update:modelValue="val => form.hpht = val" />
        <FormSelect id="kehamilanPertama" label="Kehamilan Pertama" :modelValue="form.kehamilanPertama"
          @update:modelValue="val => form.kehamilanPertama = val" :options="kehamilanPertamaOptions" />
        <FormInput id="usiaIbu" label="Usia Ibu" type="number" :modelValue="form.usiaIbu"
          @update:modelValue="val => form.usiaIbu = val" />
        <FormInput id="intervalKehamilan" label="Interval Kehamilan (Tahun)" type="number"
          :modelValue="form.itervalKehamilan" @update:modelValue="val => form.itervalKehamilan = val" />
        <FormSelect id="conceptionMethod" label="Conception Method (Cara Kehamilan)" :modelValue="form.conceptionMethod"
          @update:modelValue="val => form.conceptionMethod = val" :options="conceptionOptions" />
        <FormSelect id="riwayatHamilPe" label="Riwayat Hamil Dengan PE" :modelValue="form.riwayatHamilPe"
          @update:modelValue="val => form.riwayatHamilPe = val" :options="yesNoOptions" />
        <FormSelect id="riwayatDiabetesMelitus" label="Riwayat Diabetes Melitus"
          :modelValue="form.riwayatdiabetesMelitus" @update:modelValue="val => form.riwayatdiabetesMelitus = val"
          :options="yesNoOptions" />
        <FormSelect id="riwayatHipertensiKronik" label="Riwayat Hipertensi Kronik"
          :modelValue="form.riwayatHipertensiKronik" @update:modelValue="val => form.riwayatHipertensiKronik = val"
          :options="yesNoOptions" />
        <FormSelect id="riwayatIbuSaudaraPerempuanPe" label="Riwayat Ibu/Saudara Perempuan PE"
          :modelValue="form.riwayatIbuSaudaraPerempuanPe"
          @update:modelValue="val => form.riwayatIbuSaudaraPerempuanPe = val" :options="yesNoOptions" />
      </div>

      <div class="border-t border-dashed border-gray-400 my-6"></div>

      <!-- Body Measurements Header -->
      <h2 class="text-lg font-semibold mb-4">Pengukuran Tubuh</h2>

      <!-- Section 1 -->
      <div class="mb-6">
        <!-- Column Headers -->
        <div class="grid grid-cols-[120px_1fr_1fr] gap-4 mb-8">
          <div></div>
          <span class="text-sm font-medium text-center">Kiri</span>
          <span class="text-sm font-medium text-center">Kanan</span>
        </div>

        <!-- Systole I -->
        <div class="grid grid-cols-[120px_1fr_1fr] gap-4 items-center mb-2">
          <span class="text-sm font-medium">Systole I</span>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.systoleKiri1" @update:modelValue="val => form.systoleKiri1 = val"
              class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.systoleKanan1"
              @update:modelValue="val => form.systoleKanan1 = val" class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
        </div>

        <!-- Diastole I -->
        <div class="grid grid-cols-[120px_1fr_1fr] gap-4 items-center">
          <span class="text-sm font-medium">Diastole I</span>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.diastoleKiri1"
              @update:modelValue="val => form.diastoleKiri1 = val" class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.diastoleKanan1"
              @update:modelValue="val => form.diastoleKanan1 = val" class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
        </div>
      </div>

      <hr class="my-6 border-dashed" />

      <div class="mb-8">
        <!-- Systole II -->
        <div class="grid grid-cols-[120px_1fr_1fr] gap-4 items-center mb-2">
          <span class="text-sm font-medium">Systole II</span>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.systoleKiri2" @update:modelValue="val => form.systoleKiri2 = val"
              class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.systoleKanan2"
              @update:modelValue="val => form.systoleKanan2 = val" class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
        </div>

        <!-- Diastole II -->
        <div class="grid grid-cols-[120px_1fr_1fr] gap-4 items-center">
          <span class="text-sm font-medium">Diastole II</span>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.diastoleKiri2"
              @update:modelValue="val => form.diastoleKiri2 = val" class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
          <div class="flex justify-center items-center gap-1">
            <FormInput type="number" :modelValue="form.diastoleKanan2"
              @update:modelValue="val => form.diastoleKanan2 = val" class="w-24" />
            <span class="text-sm">mm/Hg</span>
          </div>
        </div>
      </div>

      <!-- BMI input -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FormInput id="tinggi" label="Tingi Badan (cm)" type="number" :modelValue="form.tinggi"
          @update:modelValue="val => form.tinggi = val" />
        <FormInput id="berat" label="Berat Badan (kg)" type="number" :modelValue="form.berat"
          @update:modelValue="val => form.berat = val" />
      </div>

      <div class="border-t border-dashed border-gray-400 my-6"></div>

      <!-- USG Test -->
      <h2 class="text-lg font-semibold mb-4">Tes USG</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FormInput id="utpi" label="UtPI" :modelValue="form.utpi" @update:modelValue="val => form.utpi = val" />
        <FormInput id="oph" label="Oph" :modelValue="form.oph" @update:modelValue="val => form.oph = val" />
      </div>

      <div class="border-t border-dashed border-gray-400 my-6"></div>

      <!-- Lab Test -->
      <h2 class="text-lg font-semibold mb-4">Tes Lab</h2>
      <div class="mb-8">
        <FormInput id="plgf" label="PLGF" :modelValue="form.plgf" @update:modelValue="val => form.plgf = val" />
      </div>

      <!-- Submit Button -->
      <button @click="submitForm" class="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-700">
        Kirim
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import { validateForm } from '../utils/validation'
import { submitFormData } from '../services/api'

const form = ref({
  nama: '', email: '', noHp: '', namaFaskes: '',
  hpht: '', kehamilanPertama: '', usiaIbu: '', itervalKehamilan: '', conceptionMethod: '',
  riwayatHamilPe: '', riwayatdiabetesMelitus: '', riwayatHipertensiKronik: '', riwayatIbuSaudaraPerempuanPe: '',
  systoleKiri1: '', diastoleKiri1: '', systoleKanan1: '', diastoleKanan1: '',
  systoleKiri2: '', diastoleKiri2: '', systoleKanan2: '', diastoleKanan2: '',
  berat: '', tinggi: '', utpi: '', oph: '', plgf: ''
})

const yesNoOptions = [
  { text: 'Ya', value: '1' },
  { text: 'Tidak', value: '0' }
]

const kehamilanPertamaOptions = [
  { text: 'Ya', value: '0' },
  { text: 'Tidak', value: '1' }
]

const conceptionOptions = [
  { text: 'Spontan', value: '0' },
  { text: 'IVF/insemnasi buatan', value: '1' }
]

const bmiData = form.value.berat/(form.value.tinggi/100)**2

const submitForm = async () => {

  const data = { ...form.value }

  const { valid, message } = validateForm(data)
  if (!valid) return alert(message)

  const submittedForm = ref({
    nama: form.value.nama, email: form.value.email, noHp: form.value.noHp, namaFaskes: form.value.namaFaskes,
    hpht: form.value.hpht, kehamilanPertama: form.value.kehamilanPertama, usiaIbu: form.value.usiaIbu, 
    itervalKehamilan: form.value.itervalKehamilan, conceptionMethod: form.value.conceptionMethod,
    riwayatHamilPe: form.value.riwayatHamilPe, riwayatdiabetesMelitus: form.value.riwayatdiabetesMelitus, 
    riwayatHipertensiKronik: form.value.riwayatHipertensiKronik, riwayatIbuSaudaraPerempuanPe: form.value.riwayatIbuSaudaraPerempuanPe,
    systoleKiri1: form.value.systoleKiri1, diastoleKiri1: form.value.diastoleKiri1, systoleKanan1: form.value.systoleKanan1, diastoleKanan1: form.value.diastoleKanan1,
    systoleKiri2: form.value.systoleKiri2, diastoleKiri2: form.value.diastoleKiri2, systoleKanan2: form.value.systoleKanan2, diastoleKanan2: form.value.diastoleKanan2,
    bmi: bmiData, utpi: form.value.utpi, oph: form.value.oph, plgf: form.value.plgf
  })

  const payload = { ...submittedForm.value }

  // Transform interval kehamilan rule
  const interval = Number(payload.itervalKehamilan)
  payload.itervalKehamilan = (interval >= 1 && interval <= 9) ? '1' : '0'

  try {
    const response = await submitFormData(payload)
    alert('Form berhasil dikirim!')
    console.log('Response:', response)
  } catch (err) {
    console.error('Submit error:', err)
    alert('Terjadi kesalahan saat mengirim data.')
  }
}
</script>
