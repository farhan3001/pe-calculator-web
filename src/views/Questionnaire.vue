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
import FormInput from '../components/FormInput.vue'
import FormSelect from '../components/FormSelect.vue'
import { validateForm } from '../utils/validation'
import { submitFormDataDoctor, submitFormDataNurse } from '../services/api'

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
  { text: '> 10 Tahun/Anak Pertama', value: '0' },
  { text: '< 10 Tahun', value: '1' }
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
      response = await submitFormDataDoctor(payloadDokter)
      alert('Form berhasil dikirim!')
      console.log('Response:', response)
    } else if (userRole.value.userRole == 'bidan') {
      response = await submitFormDataNurse(payloadNurse)
      alert('Form berhasil dikirim!')
      console.log('Response:', response)
    } else {
      alert('Form gagal dikirim!')
    }
  } catch (err) {
    console.error('Submit error:', err)
    alert('Terjadi kesalahan saat mengirim data.')
  }
}
</script>
