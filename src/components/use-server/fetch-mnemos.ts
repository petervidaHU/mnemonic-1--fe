"use server"
const baseUrl = 'http://localhost:3010';

export const getMnemos = async (acronyms: string) => {
  const response = await fetch(`${baseUrl}/mnemo/create/${acronyms}`)
  return response.json()
}