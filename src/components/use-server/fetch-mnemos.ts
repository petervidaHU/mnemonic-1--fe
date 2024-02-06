"use server"
import { MnemonicObject, ResponseObj } from "@/store/mnemonicsSlice";

const baseUrl = 'http://localhost:3010';

export const getMnemos = async (acronyms: string): Promise<ResponseObj> => {
  const response = await fetch(`${baseUrl}/mnemo/create/${acronyms}`)
  const mnemos = await response.json();
  const data = mnemos.data.map((d: any) => ({ ...d, status: null }))
  return { acronyms, data };
}

export const updateMnemos = async (acronyms: string, mnemos: Array<MnemonicObject>): Promise<any> => {
  const body = {
    acronyms,
    mnemos,
  }
  const response = await fetch(`${baseUrl}/mnemo/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
  return response.json()
}