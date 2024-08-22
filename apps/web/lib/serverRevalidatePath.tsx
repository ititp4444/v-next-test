'use server'
import { revalidatePath } from 'next/cache'
export async function serverRevalidatePath() {
    revalidatePath('/admin')
}
