export const convertFormToJSON = (form) => {
  return {
    nama: String(form.nama),
    email: String(form.email),
    noHp: String(form.noHp),
    namaFaskes: String(form.namaFaskes),
    hpht: String(form.hpht),
    kehamilanPertama: form.kehamilanPertama,
    itervalKehamilan:
      parseInt(form.itervalKehamilan) >= 1 && parseInt(form.itervalKehamilan) < 10 ? '1' : '0',
    conceptionMethod: form.conceptionMethod,
    riwayatHamilPe: form.riwayatHamilPe,
    riwayatdiabetesMelitus: form.riwayatdiabetesMelitus,
    riwayatHipertensiKronik: form.riwayatHipertensiKronik,
    riwayatIbuSaudaraPerempuanPe: form.riwayatIbuSaudaraPerempuanPe,
    systoleKiri1: String(form.systoleKiri1),
    diastoleKiri1: String(form.diastoleKiri1),
    systoleKanan1: String(form.systoleKanan1),
    diastoleKanan1: String(form.diastoleKanan1),
    systoleKiri2: String(form.systoleKiri2),
    diastoleKiri2: String(form.diastoleKiri2),
    systoleKanan2: String(form.systoleKanan2),
    diastoleKanan2: String(form.diastoleKanan2),
    bmi: String(form.bmi),
    utpi: String(form.utpi),
    oph: String(form.oph),
    plgf: String(form.plgf || '')
  }
}

export const validateForm = (form) => {
  // Required fields (except plgf)
  const requiredFields = [
    'nama', 'email', 'noHp', 'namaFaskes', 'hpht',
    'kehamilanPertama', 'itervalKehamilan', 'conceptionMethod',
    'riwayatHamilPe', 'riwayatdiabetesMelitus',
    'riwayatHipertensiKronik', 'riwayatIbuSaudaraPerempuanPe',
    'systoleKiri1', 'diastoleKiri1', 'systoleKanan1', 'diastoleKanan1',
    'systoleKiri2', 'diastoleKiri2', 'systoleKanan2', 'diastoleKanan2',
    'bmi'
  ]

  for (const field of requiredFields) {
    if (!form[field]) {
      return { valid: false, message: `Field "${field}" harus diisi.` }
    }
  }

  // Validate utpi/oph (at least one must be filled)
  if (!form.utpi && !form.oph) {
    return { valid: false, message: 'Minimal salah satu UtPI atau Oph harus diisi.' }
  }

  return { valid: true }
}

