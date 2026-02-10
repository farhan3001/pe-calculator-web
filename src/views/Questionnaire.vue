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
        <FormInput id="namaFaskes" label="Nama Faskes" :modelValue="form.namaFaskes" @update:modelValue="val => form.namaFaskes = val" />
        <FormInput id="namaNakes" label="Nama Nakes" :modelValue="form.namaNakes" @update:modelValue="val => form.namaNakes = val" />
        <FormInput id="noHpNakes" label="No HP Nakes" :modelValue="form.noHpNakes" @update:modelValue="val => form.noHpNakes = val" />
        <FormInput id="emailNakes" label="Email Nakes" :modelValue="form.emailNakes" @update:modelValue="val => form.emailNakes = val" />
      </div>

      <!-- userRole Selector -->
      <div class="mb-8">
        <FormSelect id="userRole" label="Dokter atau Bidan?" :modelValue="userRole.userRole" @update:modelValue="val => userRole.userRole = val"
          :options="userRoleOptions" />
      </div>

      <div v-if="userRole.userRole === 'dokter'" :key="userRole.userRole">

        <div class="border-t border-dashed border-gray-400 my-6"></div>

        <h2 class="text-lg font-semibold mb-4">Daftar Pertanyaan</h2>
        <!-- Questionnaire -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <FormInput id="tglLahir" label="Tanggal Lahir" type="date" :modelValue="form.tglLahir"
            @update:modelValue="val => form.tglLahir = val" />
          <FormInput id="hpht" label="HPHT" type="date" :modelValue="form.hpht"
            @update:modelValue="val => form.hpht = val" />
          <FormInput id="hpl" label="HPL" type="date" :modelValue="form.hpl"
            @update:modelValue="val => form.hpl = val" />
          <FormSelect id="kehamilanPertama" label="Kehamilan Pertama" :modelValue="form.kehamilanPertama"
            @update:modelValue="val => form.kehamilanPertama = val" :options="kehamilanPertamaOptions" />
          <!-- <FormInput id="usiaIbu" label="Usia Ibu" type="number" :modelValue="form.usiaIbu"
          @update:modelValue="val => form.usiaIbu = val" /> -->
          <!-- <FormInput id="intervalKehamilan" label="Interval Kehamilan (Tahun)" type="number"
          :modelValue="form.itervalKehamilan" @update:modelValue="val => form.itervalKehamilan = val" /> -->
          <FormSelect id="intervalKehamilan" label="Interval Kehamilan" :modelValue="form.itervalKehamilan"
            @update:modelValue="val => form.itervalKehamilan = val" :options="interval" />
          <FormSelect id="conceptionMethod" label="Conception Method (Cara Kehamilan)"
            :modelValue="form.conceptionMethod" @update:modelValue="val => form.conceptionMethod = val"
            :options="conceptionOptions" />
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
      </div>

      <div v-if="userRole.userRole === 'bidan'" :key="userRole.userRole">

        <div class="border-t border-dashed border-gray-400 my-6"></div>

        <h2 class="text-lg font-semibold mb-4">Daftar Pertanyaan</h2>

        <!-- Questionnaire -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          <!-- Multipara Dengan Kehamilan oleh Pasangan Baru -->
          <FormSelect id="multiparaPasanganBaru" label="Multipara dengan Pasangan Baru"
            :modelValue="form.multiparaPasanganBaru" @update:modelValue="val => form.multiparaPasanganBaru = val"
            :options="yesNoOptionsNurseLowRisk" />

          <!-- Kehamilan dengan Teknologi Reproduksi Berbantu -->
          <FormSelect id="teknologiReproduksi" label="Kehamilan dengan Teknologi Reproduksi Berbantu"
            :modelValue="form.teknologiReproduksi" @update:modelValue="val => form.teknologiReproduksi = val"
            :options="yesNoOptionsNurseLowRisk" />

          <!-- Umur ≥ 35 Tahun -->
          <FormSelect id="usiaLebih35" label="Usia Ibu ≥ 35 Tahun" :modelValue="form.usiaLebih35"
            @update:modelValue="val => form.usiaLebih35 = val" :options="yesNoOptionsNurseLowRisk" />

          <!-- Nulipara -->
          <FormSelect id="nulipara" label="Nulipara" :modelValue="form.nulipara"
            @update:modelValue="val => form.nulipara = val" :options="yesNoOptionsNurseLowRisk" />

          <!-- Multipara Jarak Kehamilan > 10 Tahun -->
          <FormSelect id="jarakKehamilanLebih10" label="Jarak Kehamilan Sebelumnya > 10 Tahun"
            :modelValue="form.jarakKehamilanLebih10" @update:modelValue="val => form.jarakKehamilanLebih10 = val"
            :options="yesNoOptionsNurseLowRisk" />

          <!-- Riwayat Preeklampsia Ibu / Saudara -->
          <FormSelect id="riwayatPeKeluarga" label="Riwayat Preeklampsia pada Ibu / Saudara Perempuan"
            :modelValue="form.riwayatPeKeluarga" @update:modelValue="val => form.riwayatPeKeluarga = val"
            :options="yesNoOptionsNurseLowRisk" />

          <!-- Obesitas Sebelum Hamil -->
          <FormSelect id="obesitasSebelumHamil" label="Obesitas Sebelum Hamil (IMT > 30)"
            :modelValue="form.obesitasSebelumHamil" @update:modelValue="val => form.obesitasSebelumHamil = val"
            :options="yesNoOptionsNurseLowRisk" />

          <!-- Riwayat Preeklampsia Sebelumnya -->
          <FormSelect id="riwayatPeSebelumnya" label="Riwayat Preeklampsia Sebelumnya"
            :modelValue="form.riwayatPeSebelumnya" @update:modelValue="val => form.riwayatPeSebelumnya = val"
            :options="yesNoOptionsNurseHighRisk" />

          <!-- Kehamilan Multipel -->
          <FormSelect id="kehamilanMultipel" label="Kehamilan Multipel" :modelValue="form.kehamilanMultipel"
            @update:modelValue="val => form.kehamilanMultipel = val" :options="yesNoOptionsNurseHighRisk" />

          <!-- Diabetes dalam Kehamilan -->
          <FormSelect id="diabetesKehamilan" label="Diabetes dalam Kehamilan" :modelValue="form.diabetesKehamilan"
            @update:modelValue="val => form.diabetesKehamilan = val" :options="yesNoOptionsNurseHighRisk" /> 

          <!-- Hipertensi Kronik -->
          <FormSelect id="hipertensiKronik" label="Hipertensi Kronik" :modelValue="form.hipertensiKronik"
            @update:modelValue="val => form.hipertensiKronik = val" :options="yesNoOptionsNurseHighRisk" />

          <!-- Penyakit Ginjal -->
          <FormSelect id="penyakitGinjal" label="Penyakit Ginjal" :modelValue="form.penyakitGinjal"
            @update:modelValue="val => form.penyakitGinjal = val" :options="yesNoOptionsNurseHighRisk" />

          <!-- Penyakit Autoimun / SLE -->
          <FormSelect id="autoimunSLE" label="Penyakit Autoimun (SLE)" :modelValue="form.autoimunSLE"
            @update:modelValue="val => form.autoimunSLE = val" :options="yesNoOptionsNurseHighRisk" />

          <!-- Antiphospholipid Syndrome -->
          <FormSelect id="antiphospholipidSyndrome" label="Antiphospholipid Syndrome"
            :modelValue="form.antiphospholipidSyndrome" @update:modelValue="val => form.antiphospholipidSyndrome = val"
            :options="yesNoOptionsNurseHighRisk" />

          <!-- Mean Arterial Pressure -->
          <!-- <FormInput id="meanArterialPressure" label="Mean Arterial Pressure (mmHg)" type="number"
            :modelValue="form.meanArterialPressure" @update:modelValue="val => form.meanArterialPressure = val" /> -->

          <!-- Proteinuria -->
          <FormSelect id="proteinuria" label="Proteinuria" :modelValue="form.proteinuria"
            @update:modelValue="val => form.proteinuria = val" :options="yesNoOptionsNurseHighRisk" />
        </div>
      </div>

      <div>
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
              <FormInput type="number" :modelValue="form.systoleKiri1"
                @update:modelValue="val => form.systoleKiri1 = val" class="w-24" />
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
              <FormInput type="number" :modelValue="form.systoleKiri2"
                @update:modelValue="val => form.systoleKiri2 = val" class="w-24" />
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
        <div v-if="userRole.userRole === 'dokter'" :key="userRole.userRole" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <FormInput id="tinggi" label="Tingi Badan (cm)" type="number" :modelValue="form.tinggi"
            @update:modelValue="val => form.tinggi = val" />
          <FormInput id="berat" label="Berat Badan (kg)" type="number" :modelValue="form.berat"
            @update:modelValue="val => form.berat = val" />
        </div>

      </div>

      <div v-if="userRole.userRole === 'dokter'" :key="userRole.userRole">
        <div class="border-t border-dashed border-gray-400 my-6"></div>

        <!-- USG UtPi -->
        <h2 class="text-lg font-semibold mb-8">UtPi USG</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput id="utpiKiri" label="UtPi Kiri" :modelValue="form.utpiKiri" @update:modelValue="val => form.utpiKiri = val" />
          <FormInput id="utpiKanan" label="UtPi Kanan" :modelValue="form.utpiKanan" @update:modelValue="val => form.utpiKanan = val" />
        </div>

        <div class="border-t border-dashed border-gray-400 my-6"></div>
        
        <!-- USG OPH -->
        <h2 class="text-lg font-semibold mb-8">Ophtalmica USG</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput id="vel1" label="Vel 1" :modelValue="form.vel1" @update:modelValue="val => form.vel1 = val" />
          <FormInput id="vel2" label="Vel 2" :modelValue="form.vel2" @update:modelValue="val => form.vel2 = val" />
        </div>

        <div class="border-t border-dashed border-gray-400 my-6"></div>

        <!-- Lab Test -->
        <h2 class="text-lg font-semibold mb-4">Tes Lab</h2>
        <div class="mb-8">
          <FormInput id="plgf" label="PLGF" :modelValue="form.plgf" @update:modelValue="val => form.plgf = val" />
        </div>
      </div>

      <!-- Result -->
      <div v-if="peResult.result !== null" class="mb-8">
        <h2 class="text-lg font-semibold mb-2">Hasil Perhitungan</h2>

        <div
          class="p-4 rounded-lg text-center border"
          :class="riskStatus.isHighRisk
            ? 'bg-red-50 border-red-200'
            : 'bg-green-50 border-green-200'"
        >
          <p class="text-sm text-gray-600 mb-1">
            Nilai Risiko Pre-Eklampsia
          </p>

          <p
            class="text-3xl font-bold"
            :class="riskStatus.isHighRisk
              ? 'text-red-700'
              : 'text-green-700'"
          >
            {{ Number(peResult.result).toFixed(2) }}
          </p>

          <p
            class="mt-2 text-sm font-semibold"
            :class="riskStatus.isHighRisk
              ? 'text-red-600'
              : 'text-green-600'"
          >
             {{ riskStatus.isHighRisk ? 'RISIKO TINGGI' : 'RISIKO RENDAH' }}
          </p>
        </div>
      </div>


      <!-- Submit Button -->
      <button @click="submitForm" :disabled="!userRole"
        class="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-700">
        Kirim
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onMounted } from 'vue'
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import { validateForm } from '../utils/validation'
import { submitFormDataDoctor, submitFormDataNurse, getLatestPeCalculatorByEmail } from '../services/api'

const mockApiPayloads = [
  // ===== 1. ORIGINAL (baseline) =====
  {
    nama: 'Test Pasien 1',
    email: 'test1@example.com',
    noHp: '081234567890',
    namaFaskes: 'IPI',
    namaNakes: 'Vania',
    noHpNakes: '081165890712',
    emailNakes: 'dummy.nakes@gmail.com',
    hpht: '2026-01-01',
    hpl: '',
    kehamilanPertama: '0',
    tglLahir: '2002-05-10',
    itervalKehamilan: '0',
    conceptionMethod: '0',
    riwayatHamilPe: '0',
    riwayatdiabetesMelitus: '0',
    riwayatHipertensiKronik: '0',
    riwayatIbuSaudaraPerempuanPe: '0',
    systoleKiri1: '110',
    diastoleKiri1: '90',
    systoleKanan1: '110',
    diastoleKanan1: '90',
    systoleKiri2: '110',
    diastoleKiri2: '90',
    systoleKanan2: '110',
    diastoleKanan2: '90',
    tinggi: '153',
    berat: '53',
    utpiKanan: '1.38',
    utpiKiri: '1.28',
    vel1: '40.4',
    vel2: '10.3',
  },

  // ===== 2–30. GENERATED VARIANTS =====
  ...Array.from({ length: 29 }, (_, i) => {
    const idx = i + 2
    return {
      nama: `Test Pasien ${idx}`,
      email: `test${idx}@example.com`,
      noHp: `081300000${100 + idx}`,
      namaFaskes: idx % 2 === 0 ? 'RS Ibu & Anak' : 'Puskesmas',
      namaNakes: idx % 2 === 0 ? 'Dr. Sari' : 'Bidan Lina',
      noHpNakes: `081200000${200 + idx}`,
      emailNakes: `nakes${idx}@example.com`,
      hpht: '2026-01-01',
      hpl: '',
      kehamilanPertama: idx % 2 === 0 ? '1' : '0',
      tglLahir: `19${90 + (idx % 10)}-0${(idx % 9) + 1}-15`,
      itervalKehamilan: idx % 3 === 0 ? '1' : '0',
      conceptionMethod: idx % 4 === 0 ? '1' : '0',
      riwayatHamilPe: idx % 5 === 0 ? '1' : '0',
      riwayatdiabetesMelitus: idx % 6 === 0 ? '1' : '0',
      riwayatHipertensiKronik: idx % 7 === 0 ? '1' : '0',
      riwayatIbuSaudaraPerempuanPe: idx % 8 === 0 ? '1' : '0',
      systoleKiri1: String(105 + (idx % 30)),
      diastoleKiri1: String(70 + (idx % 20)),
      systoleKanan1: String(108 + (idx % 30)),
      diastoleKanan1: String(72 + (idx % 20)),
      systoleKiri2: String(107 + (idx % 30)),
      diastoleKiri2: String(75 + (idx % 20)),
      systoleKanan2: String(109 + (idx % 30)),
      diastoleKanan2: String(77 + (idx % 20)),
      tinggi: String(145 + (idx % 20)),
      berat: String(45 + (idx % 25)),
      utpiKanan: (1.1 + (idx % 5) * 0.15).toFixed(2),
      utpiKiri: (1.0 + (idx % 5) * 0.14).toFixed(2),
      vel1: (35 + (idx % 10) * 1.5).toFixed(1),
      vel2: (8 + (idx % 6) * 1.1).toFixed(1),
    }
  })
]


let index = ref(0)

const autofillNextPayload = () => {
  const payload = mockApiPayloads[index.value % mockApiPayloads.length]

  Object.keys(form.value).forEach((key) => {
    if (payload[key] !== undefined) {
      form.value[key] = payload[key]
    }
  })

  // index odd → dokter, even → bidan
  // userRole.value.userRole = index % 2 === 1 ? 'dokter' : 'bidan'
  userRole.value.userRole = 'dokter'
}

onMounted(() => {
  autofillNextPayload()
})

const userRole = ref({
  userRole: ''
}) // initial: nothing selected

const userRoleOptions = [
  { text: 'Dokter', value: 'dokter' },
  { text: 'Bidan', value: 'bidan' }
]

const form = ref({

  // Genaral Info
  nama: '',
  email: '',
  noHp: '',
  namaFaskes: '',
  namaNakes: '',
  noHpNakes: '',
  emailNakes: '',

  // General Pengukuran Tubuh
  systoleKiri1: '',
  diastoleKiri1: '',
  systoleKanan1: '',
  diastoleKanan1: '',
  systoleKiri2: '',
  diastoleKiri2: '',
  systoleKanan2: '',
  diastoleKanan2: '',

  // Doctor Section questionaire
  hpht: '',
  hpl: '',
  kehamilanPertama: '',
  tglLahir: '',
  itervalKehamilan: '',
  conceptionMethod: '',
  riwayatHamilPe: '',
  riwayatdiabetesMelitus: '',
  riwayatHipertensiKronik: '',
  riwayatIbuSaudaraPerempuanPe: '',
  berat: '',
  tinggi: '',
  utpiKanan: '',
  utpiKiri: '',
  vel1: '',
  vel2: '',
  oph: '',
  plgf: '',

  // Nurse Section questionaire
  multiparaPasanganBaru: '',              
  teknologiReproduksi: '',               
  usiaLebih35: '',                       
  nulipara: '',                           
  jarakKehamilanLebih10: '',              
  riwayatPeKeluarga: '',                  
  obesitasSebelumHamil: '',               
  riwayatPeSebelumnya: '',                
  kehamilanMultipel: '',                  
  diabetesKehamilan: '',                  
  hipertensiKronik: '',                   
  penyakitGinjal: '',                    
  autoimunSLE: '',                        
  antiphospholipidSyndrome: '',           
  meanArterialPressure: '',               
  proteinuria: ''         
})

const yesNoOptions = [
  { text: 'Ya', value: '1' },
  { text: 'Tidak', value: '0' }
]

const yesNoOptionsNurseLowRisk = [
  { text: 'Ya', value: '1' },
  { text: 'Tidak', value: '0' }
]


const yesNoOptionsNurseHighRisk = [
  { text: 'Ya', value: '2' },
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

const interval = [
  { text: '> 10 Tahun/Anak Pertama', value: '1' },
  { text: '<= 10 Tahun', value: '0' }
]

const bmiData = computed(() => {
  const berat = Number(form.value.berat)
  const tinggi = Number(form.value.tinggi) / 100

  if (!berat || !tinggi) return null

  return Number((berat / (tinggi ** 2)).toFixed(2))
})

const ophFinal = computed(() => {
  const vel1 = Number(form.value.vel1)
  const vel2 =  Number(form.value.vel2)

  if (!vel1 || !vel2) return null

  return (Number(vel2) / Number(vel1)).toFixed(2)
})

const utpiFinal = computed(() => {
  const utpiKanan = Number(form.value.utpiKanan)
  const utpiKiri = Number(form.value.utpiKiri)

  if (!utpiKiri || !utpiKanan) return null

  return ((utpiKanan + utpiKiri) / 2).toFixed(2)
})

const peResult = ref({
  result: null,
  usiaKehamilan: null
})

const riskStatus = computed(() => {
  const result = Number(peResult.value.result)
  const usia = Number(peResult.value.usiaKehamilan)

  if (!result || !usia) {
    return {
      level: null,
      isHighRisk: false
    }
  }

  // Rule 1
  if (usia < 34) {
    return {
      level: result <= 49 ? 'high' : 'low',
      isHighRisk: result <= 49
    }
  }

  // Rule 2
  if (usia >= 34 && usia < 37) {
    return {
      level: result <= 13 ? 'high' : 'low',
      isHighRisk: result <= 13
    }
  }

  // Default (≥ 37 weeks → treat as low risk unless specified later)
  return {
    level: 'low',
    isHighRisk: false
  }
})

const submitForm = async () => {

  const data = { ...form.value }

  const { valid, message } = validateForm(data, userRole.value.userRole)
  if (!valid) return alert(message)

  var payloadDokter = null
  var payloadNurse = null

  if (userRole.value.userRole == 'dokter') {
    const submittedFormDokter = ref({
      nama: form.value.nama,
      email: form.value.email,
      noHp: form.value.noHp,
      namaFaskes: form.value.namaFaskes,
      namaNakes: form.value.namaNakes,
      noHpNakes: form.value.noHpNakes,
      emailNakes: form.value.emailNakes,
      hpht: form.value.hpht,
      hpl: form.value.hpl,
      kehamilanPertama: form.value.kehamilanPertama,
      tglLahir: form.value.tglLahir,
      itervalKehamilan: form.value.itervalKehamilan,
      conceptionMethod: form.value.conceptionMethod,
      riwayatHamilPe: form.value.riwayatHamilPe,
      riwayatdiabetesMelitus: form.value.riwayatdiabetesMelitus,
      riwayatHipertensiKronik: form.value.riwayatHipertensiKronik,
      riwayatIbuSaudaraPerempuanPe: form.value.riwayatIbuSaudaraPerempuanPe,
      systoleKiri1: String(form.value.systoleKiri1),
      diastoleKiri1: String(form.value.diastoleKiri1),
      systoleKanan1: String(form.value.systoleKanan1),
      diastoleKanan1: String(form.value.diastoleKanan1),
      systoleKiri2: String(form.value.systoleKiri2),
      diastoleKiri2: String(form.value.diastoleKiri2),
      systoleKanan2: String(form.value.systoleKanan2),
      diastoleKanan2: String(form.value.diastoleKanan2),
      bmi: String(bmiData.value),
      utpi: String(utpiFinal.value),
      oph: String(ophFinal.value),
      plgf: String(form.value.plgf)
    })

    console.log('BMI Data: ', String(bmiData.value))
    console.log('UTPI: ', String(utpiFinal.value))
    console.log('OPH: ', String(ophFinal.value))

    payloadDokter = { ...submittedFormDokter.value }

  } else {
    const submittedFormNurse = ref({
      nama: form.value.nama,
      email: form.value.email,
      noHp: form.value.noHp,
      namaFaskes: form.value.namaFaskes,
      namaNakes: form.value.namaNakes,
      noHpNakes: form.value.noHpNakes,
      emailNakes: form.value.emailNakes,
      multiparaPasanganBaru: form.value.multiparaPasanganBaru,
      teknologiReproduksi: form.value.teknologiReproduksi,
      usiaLebih35: form.value.usiaLebih35,
      nulipara: form.value.nulipara,
      jarakKehamilanLebih10: form.value.jarakKehamilanLebih10,
      riwayatPeKeluarga: form.value.riwayatPeKeluarga,
      obesitasSebelumHamil: form.value.obesitasSebelumHamil,
      riwayatPeSebelumnya: form.value.riwayatPeSebelumnya,
      kehamilanMultipel: form.value.kehamilanMultipel,
      diabetesKehamilan: form.value.diabetesKehamilan,
      hipertensiKronik: form.value.hipertensiKronik,
      penyakitGinjal: form.value.penyakitGinjal,
      autoimunSLE: form.value.autoimunSLE,
      antiphospholipidSyndrome: form.value.antiphospholipidSyndrome,
      meanArterialPressure: form.value.meanArterialPressure,
      proteinuria: form.value.proteinuria,
      systoleKiri1: String(form.value.systoleKiri1),
      diastoleKiri1: String(form.value.diastoleKiri1),
      systoleKanan1: String(form.value.systoleKanan1),
      diastoleKanan1: String(form.value.diastoleKanan1),
      systoleKiri2: String(form.value.systoleKiri2),
      diastoleKiri2: String(form.value.diastoleKiri2),
      systoleKanan2: String(form.value.systoleKanan2),
      diastoleKanan2: String(form.value.diastoleKanan2),
    })

    payloadNurse = { ...submittedFormNurse.value }

  }

  // Transform interval kehamilan rule
  // const interval = Number(payload.itervalKehamilan)
  // payload.itervalKehamilan = (interval >= 1 && interval <= 9) ? '1' : '0'

  try {

    console.log('Role: ', userRole.value.userRole)

    if (userRole.value.userRole == 'dokter') {
      const response = await submitFormDataDoctor(payloadDokter)
      console.log('Response:', response)

      const latestResultRes = await getLatestPeCalculatorByEmail(form.value.email)

      peResult.value.result = latestResultRes?.data?.data?.result ?? null
      peResult.value.usiaKehamilan = latestResultRes?.data?.data?.usiaKehamilan ?? null

      // console.log('PE Result:', peResult.value)

      // alert(`Hasil Risiko Pre-Eklampsia: ${peResult.value}`)

      alert('Form berhasil dikirim!')

      index.value++
      autofillNextPayload()


    } else if (userRole.value.userRole == 'bidan') {
      const response = await submitFormDataNurse(payloadNurse)
      alert('Form berhasil dikirim!')
      console.log('Response:', response)

      const latestResultRes = await getLatestPeCalculatorByEmail(form.value.email)

      peResult.value.result = latestResultRes?.data?.data?.result ?? null
      peResult.value.usiaKehamilan = latestResultRes?.data?.data?.usiaKehamilan ?? null

    } else {
      alert('Form gagal dikirim!')
    }
  } catch (err) {
    console.error('Submit error:', err)
    alert('Terjadi kesalahan saat mengirim data.')
  }
}
</script>
