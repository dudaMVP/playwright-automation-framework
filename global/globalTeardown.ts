// global-teardown.ts
import fs from 'fs'

async function globalTeardown() {
  const storagePath = 'storage/storageState.json'

  if (fs.existsSync(storagePath)) {
    fs.unlinkSync(storagePath)
    console.log('✅ Deleted storageState.json after test run')
  } else {
    console.log('⚠️ No storageState.json found to delete')
  }
}

export default globalTeardown